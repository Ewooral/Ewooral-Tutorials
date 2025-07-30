import os
import time
import google.generativeai as genai

def generate_with_retry(model, prompt, max_retries=3, initial_delay=60):
    """
    Attempt to generate content with retries for rate limit errors.
    """
    delay = initial_delay
    
    for attempt in range(max_retries + 1):
        try:
            if attempt > 0:
                print(f"Retry attempt {attempt}/{max_retries} after {delay}s delay...")
            
            return model.generate_content(prompt)
            
        except Exception as e:
            error_str = str(e)
            
            if "429" in error_str and attempt < max_retries:
                try:
                    if "retry_delay" in error_str:
                        retry_info = error_str.split("retry_delay {")[1].split("}")[0]
                        seconds_str = retry_info.split("seconds:")[1].strip()
                        delay = int(seconds_str)
                    else:
                        delay = initial_delay * (2 ** attempt)
                except:
                    delay = initial_delay * (2 ** attempt)
                
                print(f"Rate limit exceeded. Waiting {delay} seconds before retry...")
                time.sleep(delay)
            else:
                raise
    
    return None

def load_company_info():
    """Load and return the company information."""
    with open("company_info.txt", "r") as f:
        return f.read()

def create_prompt(question, company_info):
    """Create a well-structured prompt for the model."""
    return f"""As an AI assistant for BFAM Inc., I will help answer questions about the company using the following information:

Context:
{company_info}

Question: {question}

Please provide a clear, accurate, and professional response based strictly on the information provided above. If the information isn't available in the context, please say so."""

def initialize_model():
    """Initialize and return the appropriate Gemini model."""
    # Configure the API
    genai.configure(api_key=os.environ.get("GOOGLE_API_KEY"))
    
    # List and select appropriate model
    available_models = [m.name for m in genai.list_models()]
    print("Selecting appropriate model...")
    
    # Prioritize different model types
    flash_models = [m for m in available_models if "flash" in m and "gemini" in m]
    pro_models = [m for m in available_models if "gemini" in m and "vision" not in m and "flash" not in m]
    
    if flash_models:
        model_name = flash_models[0]
        print(f"Using flash model (lower quota usage): {model_name}")
    elif pro_models:
        model_name = pro_models[0]
        print(f"Using pro model (higher quota usage): {model_name}")
    else:
        model_name = "models/gemini-1.5-pro"
        print(f"Falling back to default model: {model_name}")
    
    return genai.GenerativeModel(model_name=model_name)

def main():
    print("BFAM Inc. Q&A System")
    print("Type 'quit' to exit")
    print("-" * 50)
    
    try:
        # Load company information
        company_info = load_company_info()
        
        # Initialize the model
        model = initialize_model()
        
        while True:
            try:
                question = input("\nWhat would you like to know about BFAM Inc.? ")
                if question.lower() == 'quit':
                    break
                
                # Create the prompt
                prompt = create_prompt(question, company_info)
                
                # Generate response with retry mechanism
                response = generate_with_retry(model, prompt)
                
                if response:
                    print("\nResponse:", response.text)
                else:
                    print("\nFailed to generate response after multiple retries.")
                
            except KeyboardInterrupt:
                print("\nExiting...")
                break
            except Exception as e:
                error_str = str(e)
                print(f"\nAn error occurred: {error_str}")
                
                if "429" in error_str:
                    if "GenerateRequestsPerDayPerProjectPerModel" in error_str:
                        print("⚠️ DAILY QUOTA LIMIT REACHED ⚠️")
                        print("- You've hit your daily limit for this model")
                        print("- Try again tomorrow or use a different model")
                    else:
                        print("Rate limit exceeded. Consider:")
                        print("- Waiting a few minutes before trying again")
                        print("- Using a different model with lower quota usage")
                elif "403" in error_str:
                    print("Authentication error. Please check your API key.")
                elif "404" in error_str:
                    print("Model not found. Trying to use a different model...")
                    model = initialize_model()
    
    except Exception as e:
        print(f"System Error: {str(e)}")
        print("Please ensure:")
        print("1. You have set the GOOGLE_API_KEY environment variable")
        print("2. The company_info.txt file exists in the current directory")
        print("3. You have internet connectivity")

if __name__ == "__main__":
    main()
