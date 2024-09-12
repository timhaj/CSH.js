# CSH.js
Customizable Syntax Highlighter.js

# Currently supports:
- R
- Python
- SQL
- C#

# TODO
- Line numbers
- Apply anywhere inside a 'pre' block, not directly in is
- Currently VS Code highlighting, in future other bigger IDEs (jetbrains,...), maybe a template for user specific



```python
# pip install sentence-transformers

from sentence_transformers import SentenceTransformer, util
# Load pre-trained sentence transformer model
model = SentenceTransformer('all-MiniLM-L6-v2')

# Two example texts
text1 = "You can print documents using this and this"
text2 = "lorem ipsum durum durum documents"

# Generate embeddings for both texts
embedding1 = model.encode(text1, convert_to_tensor=True)
embedding2 = model.encode(text2, convert_to_tensor=True)

# Compute cosine similarity between the embeddings
cosine_similarity = util.pytorch_cos_sim(embedding1, embedding2)
similarity_score = (cosine_similarity.item() + 1) / 2
# Convert cosine similarity to cosine distance
cosine_distance = 1 - cosine_similarity.item()

print(f"Cosine Distance between the texts: {cosine_distance:.4f}")
```
