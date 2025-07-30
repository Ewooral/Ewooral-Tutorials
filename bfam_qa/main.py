from fastapi import FastAPI, HTTPException, Depends, Security
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.security import APIKeyHeader
from pydantic import BaseModel, Field
from typing import Optional, List, Dict
import json
import google.generativeai as genai
import markdown2
import os
from dotenv import load_dotenv
import time
from pathlib import Path
import json
from datetime import datetime

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI(
    title="BFAM QA API",
    description="API for querying and updating information about BFAM Inc.",
    version="1.0.0"
)

# Serve static files
app.mount("/static", StaticFiles(directory="static"), name="static")

# Create docs directory if it doesn't exist
docs_path = Path("docs")
docs_path.mkdir(exist_ok=True)

# Mount the docs directory
app.mount("/docs/files", StaticFiles(directory="docs"), name="docs")

@app.get("/docs/view/{doc_name}", response_class=HTMLResponse)
async def view_doc(doc_name: str):
    """
    View a documentation file with basic HTML rendering
    """
    try:
        doc_path = docs_path / f"{doc_name}.md"
        if not doc_path.exists():
            raise HTTPException(status_code=404, detail="Documentation not found")
        
        # Read and convert markdown to HTML
        markdown_content = doc_path.read_text()
        html_content = markdown2.markdown(
            markdown_content,
            extras=["fenced-code-blocks", "tables"]
        )
        
        # Basic HTML template with some styling
        return f"""
        <!DOCTYPE html>
        <html>
        <head>
            <title>BFAM QA Documentation - {doc_name}</title>
            <style>
                body {{
                    font-family: system-ui, -apple-system, sans-serif;
                    line-height: 1.6;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                }}
                pre {{
                    background-color: #f6f8fa;
                    padding: 16px;
                    border-radius: 6px;
                    overflow: auto;
                }}
                code {{
                    font-family: 'Courier New', Courier, monospace;
                }}
            </style>
        </head>
        <body>
            <nav>
                <a href="/docs/index">Documentation Index</a>
            </nav>
            {html_content}
        </body>
        </html>
        """
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/docs/index", response_class=HTMLResponse)
async def docs_index():
    """
    Documentation index page
    """
    docs_files = [f.stem for f in docs_path.glob("*.md")]
    
    files_html = "\n".join(
        f'<li><a href="/docs/view/{doc_name}">{doc_name}</a></li>'
        for doc_name in docs_files
    )
    
    return f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>BFAM QA Documentation</title>
        <style>
            body {{
                font-family: system-ui, -apple-system, sans-serif;
                line-height: 1.6;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
            }}
            .doc-list {{
                list-style-type: none;
                padding: 0;
            }}
            .doc-list li {{
                margin: 10px 0;
                padding: 10px;
                background-color: #f6f8fa;
                border-radius: 6px;
            }}
            .doc-list a {{
                text-decoration: none;
                color: #0366d6;
            }}
            .doc-list a:hover {{
                text-decoration: underline;
            }}
        </style>
    </head>
    <body>
        <h1>BFAM QA Documentation</h1>
        <ul class="doc-list">
            {files_html}
        </ul>
    </body>
    </html>
    """

# Security
API_KEY_NAME = "X-API-Key"
api_key_header = APIKeyHeader(name=API_KEY_NAME)

async def get_api_key(api_key_header: str = Security(api_key_header)):
    if api_key_header == os.getenv("API_KEY", "default_key"):
        return api_key_header
    raise HTTPException(
        status_code=401,
        detail="Invalid API Key"
    )

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class QuestionRequest(BaseModel):
    question: str

class QuestionResponse(BaseModel):
    answer: str
    model_used: str
    processing_time: float

class CompanyInfoUpdate(BaseModel):
    section: str
    content: str
    updated_by: str
    reason: str

class NewSectionRequest(BaseModel):
    section_name: str
    content: str
    created_by: str

class UpdateHistory(BaseModel):
    timestamp: str
    section: str
    updated_by: str
    reason: str
    content: str

# Company information management
class CompanyInfoManager:
    def __init__(self):
        self.info_file = Path("company_info.txt")
        self.history_file = Path("update_history.json")
        self.load_history()

    def load_company_info(self) -> str:
        if not self.info_file.exists():
            raise FileNotFoundError("Company information file not found")
        return self.info_file.read_text()

    def load_history(self):
        if not self.history_file.exists():
            self.history = []
            self.save_history()
        else:
            self.history = json.loads(self.history_file.read_text())

    def save_history(self):
        self.history_file.write_text(json.dumps(self.history, indent=2))

    def update_section(self, update: CompanyInfoUpdate) -> bool:
        current_content = self.load_company_info()
        sections = current_content.split("\n\n")
        
        # Find and update the section
        updated = False
        for i, section in enumerate(sections):
            if section.strip().lower().startswith(update.section.lower()):
                sections[i] = f"{update.section}\n{update.content}"
                updated = True
                break
        
        if updated:
            # Save the updated content
            self.info_file.write_text("\n\n".join(sections))
            
            # Record the update
            self.history.append({
                "timestamp": datetime.now().isoformat(),
                "section": update.section,
                "updated_by": update.updated_by,
                "reason": update.reason,
                "content": update.content
            })
            self.save_history()
            
        return updated

    def add_new_section(self, new_section: NewSectionRequest) -> bool:
        current_content = self.load_company_info()
        
        # Check if section already exists
        if new_section.section_name.lower() in current_content.lower():
            return False
        
        # Add new section
        updated_content = f"{current_content}\n\n{new_section.section_name}\n{new_section.content}"
        self.info_file.write_text(updated_content)
        
        # Record the addition
        self.history.append({
            "timestamp": datetime.now().isoformat(),
            "section": new_section.section_name,
            "updated_by": new_section.created_by,
            "reason": "New section added",
            "content": new_section.content
        })
        self.save_history()
        
        return True

    def get_update_history(self) -> List[UpdateHistory]:
        return self.history

# Initialize company info manager
company_manager = CompanyInfoManager()

# Initialize Gemini model
def initialize_model():
    api_key = os.getenv("GOOGLE_API_KEY")
    if not api_key:
        raise ValueError("GOOGLE_API_KEY environment variable not set")
    
    genai.configure(api_key=api_key)
    available_models = [m.name for m in genai.list_models()]
    
    flash_models = [m for m in available_models if "flash" in m and "gemini" in m]
    pro_models = [m for m in available_models if "gemini" in m and "vision" not in m and "flash" not in m]
    
    if flash_models:
        model_name = flash_models[0]
    elif pro_models:
        model_name = pro_models[0]
    else:
        model_name = "models/gemini-1.5-pro"
    
    return genai.GenerativeModel(model_name=model_name), model_name

# Generate response with retry
async def generate_with_retry(model, prompt, max_retries=3, initial_delay=60):
    delay = initial_delay
    for attempt in range(max_retries + 1):
        try:
            return await model.generate_content_async(prompt)
        except Exception as e:
            error_str = str(e)
            if "429" in error_str and attempt < max_retries:
                delay = initial_delay * (2 ** attempt)
                time.sleep(delay)
            else:
                raise

def create_prompt(question: str, company_info: str) -> str:
    return f"""As an AI assistant for BFAM Inc., I will help answer questions about the company using the following information:

Context:
{company_info}

Question: {question}

Please provide a clear, accurate, and professional response based strictly on the information provided above. If the information isn't available in the context, please say so."""

# Initialize resources
try:
    model, model_name = initialize_model()
except Exception as e:
    print(f"Initialization error: {str(e)}")
    raise

# API Endpoints
@app.get("/")
async def root():
    return {
        "message": "Welcome to BFAM QA API",
        "docs_url": "/docs",
        "status": "operational"
    }

@app.post("/api/ask", response_model=QuestionResponse)
async def ask_question(request: QuestionRequest):
    try:
        start_time = time.time()
        
        # Get latest company info
        company_info = company_manager.load_company_info()
        
        # Create prompt and generate response
        prompt = create_prompt(request.question, company_info)
        response = await generate_with_retry(model, prompt)
        
        if not response:
            raise HTTPException(status_code=500, detail="Failed to generate response")
        
        processing_time = time.time() - start_time
        
        return QuestionResponse(
            answer=response.text,
            model_used=model_name,
            processing_time=round(processing_time, 2)
        )
        
    except Exception as e:
        error_msg = str(e)
        if "429" in error_msg:
            raise HTTPException(status_code=429, detail="Rate limit exceeded. Please try again later.")
        elif "403" in error_msg:
            raise HTTPException(status_code=403, detail="Authentication error")
        else:
            raise HTTPException(status_code=500, detail=f"Internal server error: {error_msg}")

@app.post("/api/update-section")
async def update_section(
    update: CompanyInfoUpdate,
    api_key: str = Depends(get_api_key)
):
    try:
        success = company_manager.update_section(update)
        if success:
            return {"message": "Section updated successfully"}
        raise HTTPException(status_code=404, detail="Section not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/add-section")
async def add_section(
    new_section: NewSectionRequest,
    api_key: str = Depends(get_api_key)
):
    try:
        success = company_manager.add_new_section(new_section)
        if success:
            return {"message": "New section added successfully"}
        raise HTTPException(status_code=400, detail="Section already exists")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/update-history")
async def get_update_history(
    api_key: str = Depends(get_api_key)
):
    try:
        history = company_manager.get_update_history()
        return {"history": history}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Interview Q&A System

class InterviewQuestion(BaseModel):
    question: str
    context: Optional[str] = None
    role: str
    category: Optional[str] = None

class InterviewResponse(BaseModel):
    question: str
    answer: str
    follow_up_questions: Optional[List[str]]
    code_example: Optional[str]
    additional_resources: Optional[List[str]]

# Load interview QA data
def load_interview_qa():
    qa_file = Path("interview_qa.json")
    if not qa_file.exists():
        raise FileNotFoundError("Interview QA database not found")
    return json.loads(qa_file.read_text())

def normalize_role_name(role: str) -> str:
    """
    Normalize role names to match our database keys
    """
    role = role.lower().replace(" ", "_").replace("-", "_")
    
    # Define role mappings
    role_mappings = {
        "ml_engineer": "machine_learning_engineer",
        "ml_expert": "machine_learning_engineer",
        "machine_learning_engineer": "machine_learning_engineer",
        "ml": "machine_learning_engineer",
        "ai_integration": "ai_integration_engineer",
        "ai_integration_engineer": "ai_integration_engineer",
        "ai_engineer": "ai_integration_engineer",
        "ai_expert": "ai_integration_engineer"
    }
    
    return role_mappings.get(role, role)

# New endpoint for interview questions
@app.post("/api/interview", response_model=InterviewResponse)
async def get_interview_answer(request: InterviewQuestion):
    """
    Get answer to an interview question based on role and category
    """
    try:
        # Load QA database
        qa_data = load_interview_qa()
        
        # Prepare prompt for the model
        prompt = f"""As an AI career advisor, please provide a detailed answer to this interview question:

Question: {request.question}
Role: {request.role}
Category: {request.category if request.category else 'general'}

Context: {request.context if request.context else 'No additional context provided'}

Please provide:
1. A comprehensive answer
2. Any relevant code examples
3. Follow-up questions to expect
4. Additional resources to reference
"""
        
        # Generate response using existing model
        response = await generate_with_retry(model, prompt)
        
        # Process and structure the response
        # (You might want to add more structure to the model's output)
        return InterviewResponse(
            question=request.question,
            answer=response.text,
            follow_up_questions=["What if...", "How would you...", "Can you explain..."],
            code_example="Example code if applicable",
            additional_resources=["Relevant documentation", "Useful articles"]
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Add endpoint to get interview questions by role
@app.get("/api/interview/questions/{role}")
async def get_interview_questions(
    role: str,
    category: Optional[str] = None
):
    """
    Get available interview questions for a specific role and category
    """
    try:
        qa_data = load_interview_qa()
        normalized_role = normalize_role_name(role)
        
        if normalized_role not in qa_data:
            available_roles = ", ".join(qa_data.keys())
            raise HTTPException(
                status_code=404, 
                detail=f"Role not found. Available roles: {available_roles}"
            )
            
        if category:
            if category not in qa_data[normalized_role]:
                available_categories = ", ".join(qa_data[normalized_role].keys())
                raise HTTPException(
                    status_code=404, 
                    detail=f"Category not found. Available categories for {role}: {available_categories}"
                )
            return {"questions": qa_data[normalized_role][category]}
            
        return {"questions": qa_data[normalized_role]}
        
    except Exception as e:
        if isinstance(e, HTTPException):
            raise e
        raise HTTPException(status_code=500, detail=str(e))

# Create interview preparation guide
@app.get("/api/interview/prepare/{role}")
async def get_interview_prep(role: str):
    """
    Get interview preparation guide for specific role
    """
    try:
        # Load career roadmap
        roadmap_file = Path("docs/career_roadmap.md")
        if not roadmap_file.exists():
            raise FileNotFoundError("Career roadmap not found")
            
        normalized_role = normalize_role_name(role)
        
        # Create preparation guide based on role
        if "ai_integration" in normalized_role:
            return {
                "preparation_guide": {
                    "technical_topics": [
                        "API Design Patterns",
                        "System Integration",
                        "Vector Databases",
                        "Pre-trained Models",
                        "Performance Optimization"
                    ],
                    "project_suggestions": [
                        "Build a QA system with pre-trained models",
                        "Implement semantic search",
                        "Create a multi-model pipeline"
                    ],
                    "resources": [
                        "FastAPI documentation",
                        "Hugging Face documentation",
                        "Vector DB tutorials"
                    ]
                }
            }
        elif "machine_learning" in normalized_role:
            return {
                "preparation_guide": {
                    "technical_topics": [
                        "ML Algorithms",
                        "Model Architecture",
                        "Training Optimization",
                        "Mathematics",
                        "Research Papers"
                    ],
                    "project_suggestions": [
                        "Train custom model",
                        "Implement research paper",
                        "Build training pipeline"
                    ],
                    "resources": [
                        "ML courses",
                        "Research papers",
                        "Math tutorials"
                    ]
                }
            }
        else:
            available_roles = "AI Integration Engineer, Machine Learning Engineer"
            raise HTTPException(
                status_code=404, 
                detail=f"Role not found. Available roles: {available_roles}"
            )
            
    except Exception as e:
        if isinstance(e, HTTPException):
            raise e
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    # Create directories if they don't exist
    os.makedirs("static", exist_ok=True)
    os.makedirs("docs", exist_ok=True)
        
    uvicorn.run("main:app", host="0.0.0.1", port=8001, reload=True)
