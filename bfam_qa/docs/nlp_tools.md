# Sentence Transformers and NLP Tools

This section outlines the use of sentence transformers and necessary tools for NLP within the bfam_qa project.

## Libraries

1. **PyTorch**: A deep learning framework to be used for building and training models.
2. **Sentence-Transformers**: Library for generating sentence and text embeddings.
3. **Transformers**: Hugging Face's library providing access to transformer models like BERT, GPT, etc.
4. **Tokenizers**: Tool for efficient text processing and tokenization.
5. **FAISS**: Library for efficient similarity search and clustering of dense vectors.

## Integration Steps

1. Install the libraries:
   - `pip install torch sentence-transformers transformers tokenizers faiss` 
   - For GPU support, ensure CUDA is installed and use the appropriate PyTorch binaries.

2. Model Usage:
   - Utilize pre-trained models from `sentence-transformers` for embedding tasks.
   - Example code for embedding sentences:
     ```python
     from sentence_transformers import SentenceTransformer
     model = SentenceTransformer('all-MiniLM-L6-v2')
     embeddings = model.encode(['sentence 1', 'sentence 2'])
     ```

3. Vector Similarity:
   - Leverage FAISS or similar libraries for indexing and searching large sets of embeddings.

## Best Practices

- Keep models and data preprocessing approaches consistent.
- Use GPU acceleration for large datasets to enhance performance.
- Regularly update models and libraries for improvements in performance and security.

## Integration with BFAM QA

### Use Cases
1. **Question Understanding**
   - Embedding user questions for semantic search
   - Finding similar questions in our knowledge base
   - Question classification and routing

2. **Answer Processing**
   - Generating embeddings for answer candidates
   - Ranking answers based on relevance
   - Semantic similarity scoring

### Configuration Management
```python
# Example configuration in config.py
TRANSFORMER_CONFIG = {
    'model_name': 'all-MiniLM-L6-v2',
    'max_seq_length': 128,
    'device': 'cuda' if torch.cuda.is_available() else 'cpu',
    'batch_size': 32
}

# Environment variables
PYTORCH_CUDA_ALLOC_CONF=max_split_size_mb:512
```

### FastAPI Integration
```python
from fastapi import FastAPI, HTTPException
from sentence_transformers import SentenceTransformer
from typing import List

app = FastAPI()
model = SentenceTransformer(TRANSFORMER_CONFIG['model_name'])

@app.post("/embed")
async def get_embeddings(texts: List[str]):
    try:
        embeddings = model.encode(texts, 
                                batch_size=TRANSFORMER_CONFIG['batch_size'],
                                show_progress_bar=False)
        return {"embeddings": embeddings.tolist()}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
```

### Performance Optimization
1. **Batch Processing**
   - Process multiple questions/answers in batches
   - Utilize GPU efficiently with appropriate batch sizes
   - Cache frequently accessed embeddings

2. **Resource Management**
   - Model loading strategies
   - Memory optimization techniques
   - GPU memory management

3. **Caching Strategy**
   ```python
   from functools import lru_cache
   
   @lru_cache(maxsize=1000)
   def get_cached_embedding(text: str):
       return model.encode([text])[0]
   ```

### Monitoring and Logging
- Track embedding generation time
- Monitor memory usage
- Log embedding statistics
- Handle errors and exceptions

Example logging configuration:
```python
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def log_embedding_metrics(text_length: int, processing_time: float):
    logger.info(f"Processed embedding - Length: {text_length}, Time: {processing_time:.2f}s")
```

### Testing and Validation
1. Unit Tests
   ```python
   def test_embedding_consistency():
       text = "Sample question for testing"
       embedding1 = model.encode([text])[0]
       embedding2 = model.encode([text])[0]
       assert np.allclose(embedding1, embedding2)
   ```

2. Integration Tests
   ```python
   async def test_embedding_endpoint():
       response = await client.post("/embed", 
           json={"texts": ["test question"]})
       assert response.status_code == 200
       assert "embeddings" in response.json()
   ```

## Maintenance and Updates

### Model Updates
- Regular evaluation of new model versions
- Performance comparison procedure
- Update rollout strategy

### Dependencies
```toml
# In pyproject.toml
[tool.poetry.dependencies]
torch = "^2.0.0"
sentence-transformers = "^2.2.2"
transformers = "^4.30.0"
faiss-cpu = "^1.7.4"  # or faiss-gpu for CUDA support
```

## BFAM QA Specific Implementation

### Data Flow Architecture
```
[User Question] 
    ↓
[Question Embedding (Sentence Transformer)]
    ↓
[Semantic Search in Knowledge Base (FAISS)]
    ↓
[Context Retrieval]
    ↓
[Google Generative AI Processing]
    ↓
[Response Generation]
```

### Integration with Google Generative AI
```python
import google.generativeai as genai
from sentence_transformers import SentenceTransformer
from typing import List, Dict

class BFAMProcessor:
    def __init__(self):
        self.st_model = SentenceTransformer(TRANSFORMER_CONFIG['model_name'])
        self.genai = genai  # Google's Generative AI

    async def process_query(self, question: str, context: List[str]) -> Dict:
        # 1. Generate embeddings for the question
        question_embedding = self.st_model.encode(question)

        # 2. Find relevant context using embeddings
        relevant_context = self.find_similar_context(question_embedding)

        # 3. Generate response using Google's Generative AI
        response = await self.generate_response(question, relevant_context)
        
        return {
            "question": question,
            "relevant_context": relevant_context,
            "response": response
        }
```

### Error Handling and Recovery
```python
class EmbeddingError(Exception):
    """Custom exception for embedding-related errors"""
    pass

async def safe_embed_text(text: str, retry_count: int = 3) -> np.ndarray:
    """Safely embed text with retry mechanism"""
    for attempt in range(retry_count):
        try:
            embedding = model.encode(text)
            return embedding
        except Exception as e:
            if attempt == retry_count - 1:
                logger.error(f"Failed to embed text after {retry_count} attempts")
                raise EmbeddingError(f"Embedding failed: {str(e)}")
            await asyncio.sleep(1)  # Wait before retry
```

### Practical Examples

1. **Similar Question Detection**
```python
async def find_similar_questions(question: str, threshold: float = 0.85) -> List[str]:
    """Find similar questions from our knowledge base"""
    question_embedding = await safe_embed_text(question)
    similar_questions = search_knowledge_base(question_embedding, threshold)
    return similar_questions
```

2. **Context Enrichment**
```python
async def enrich_context(question: str, initial_context: List[str]) -> List[str]:
    """Enrich context with semantically similar content"""
    question_embedding = await safe_embed_text(question)
    
    # Find additional relevant context
    additional_context = search_similar_context(question_embedding)
    
    # Combine and deduplicate context
    enriched_context = list(set(initial_context + additional_context))
    return enriched_context
```

3. **Answer Quality Assessment**
```python
async def assess_answer_quality(question: str, answer: str) -> float:
    """Assess the semantic similarity between question and answer"""
    embeddings = await safe_embed_text([question, answer])
    similarity_score = cosine_similarity(embeddings[0], embeddings[1])
    return float(similarity_score)
```

### Performance Benchmarks

Example benchmark results for reference:
```python
# Benchmarking code
import time

def benchmark_embedding(batch_size: int = 32):
    texts = ["sample text"] * batch_size
    start_time = time.time()
    embeddings = model.encode(texts)
    end_time = time.time()
    
    return {
        "batch_size": batch_size,
        "total_time": end_time - start_time,
        "time_per_text": (end_time - start_time) / batch_size
    }

# Typical results on CPU:
# - Single text: ~0.1s
# - Batch of 32: ~0.8s (~0.025s per text)
# - Batch of 128: ~2.5s (~0.019s per text)
```

### Deployment Considerations

1. **Resource Requirements**
   - Minimum RAM: 4GB
   - Recommended RAM: 8GB+
   - GPU Memory (if using CUDA): 4GB+
   - Storage: 2GB for models

2. **Scaling Strategy**
   - Horizontal scaling for embedding service
   - Load balancing considerations
   - Model serving optimization

3. **Monitoring Metrics**
   - Embedding generation latency
   - GPU/CPU utilization
   - Memory usage
   - Cache hit rate
   - Error rate and types

## Security and Privacy Considerations

### Data Protection
1. **Input Sanitization**
   ```python
   def sanitize_input(text: str) -> str:
       """Remove potentially harmful content from input"""
       # Remove any control characters
       text = ''.join(char for char in text if ord(char) >= 32)
       return text.strip()
   ```

2. **PII Detection**
   ```python
   def contains_pii(text: str) -> bool:
       """Check for potential PII in text"""
       pii_patterns = [
           r'\b[\w\.-]+@[\w\.-]+\.\w+\b',  # email
           r'\b\d{3}[-.]?\d{3}[-.]?\d{4}\b',  # phone
           # Add more patterns as needed
       ]
       return any(re.search(pattern, text) for pattern in pii_patterns)
   ```

### Model Security
1. **Model Validation**
   - Verify model checksums before loading
   - Regular security updates for models
   - Monitor for potential model poisoning

2. **Input Rate Limiting**
```python
from fastapi import FastAPI, HTTPException
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address

limiter = Limiter(key_func=get_remote_address)
app = FastAPI()
app.state.limiter = limiter

@app.post("/embed")
@limiter.limit("100/minute")
async def get_embeddings(texts: List[str]):
    # Implementation
```

### Data Storage
1. **Embedding Storage**
   - Encrypt sensitive embeddings at rest
   - Regular data rotation and cleanup
   - Access control for embedding database

2. **Audit Logging**
```python
async def log_embedding_access(
    user_id: str,
    text_hash: str,
    access_type: str
) -> None:
    """Log access to embeddings for audit purposes"""
    await audit_logger.info(
        "embedding_access",
        user_id=user_id,
        text_hash=text_hash,
        access_type=access_type,
        timestamp=datetime.utcnow()
    )
```

### Best Practices
1. **Access Control**
   - Role-based access for different embedding operations
   - API key rotation
   - Regular security audits

2. **Data Minimization**
   - Only store necessary embeddings
   - Implement TTL for temporary embeddings
   - Regular cleanup of unused embeddings

3. **Compliance**
   - GDPR considerations for text processing
   - Data retention policies
   - Right to erasure implementation

