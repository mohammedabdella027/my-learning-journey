# Semantic Comparator Demo

[![Tech: Node.js](https://img.shields.io/badge/Tech-Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![SDK: @google/genai](https://img.shields.io/badge/SDK-%40google%2Fgenai-4285F4?logo=google&logoColor=white)](https://www.npmjs.com/package/@google/genai)
[![Model: gemini-embedding-001](https://img.shields.io/badge/Model-gemini--embedding--001-4285F4)](https://ai.google.dev/gemini-api/docs/embeddings)
[![Status: Completed](https://img.shields.io/badge/Status-Completed-2ea44f)](#)

This practice project connects the mathematical foundations from `01_The_Mathematics_of_Meaning` to a working Node.js semantic comparison pipeline. It moves beyond keyword matching by generating vector embeddings with Google GenAI and comparing the meaning of texts with custom Cosine Similarity functions.

## Project Structure

```text
02_Building_a_Semantic_Comparator_Demo_Practice/
├── 01_Generate-Embeddings.js
│   └── Generate a raw 768-dimensional embedding with Google GenAI
├── 02_Math-Similarity.js
│   └── Compare naive and optimized Cosine Similarity implementations
├── 03_Compute-actual-semantic-search.js
│   └── Compare real text embeddings with SEMANTIC_SIMILARITY
├── package.json
└── README.md
```

## How It Works

### 1. Raw Vector Generation

`01_Generate-Embeddings.js` demonstrates the smallest complete embedding request:

1. Loads environment variables with `dotenv/config`.
2. Checks that `GEMINI_API_KEY` exists before making an API request.
3. Initializes the SDK with `GoogleGenAI`.
4. Calls `ai.models.embedContent` using `gemini-embedding-001`.
5. Requests a 768-dimensional output vector with `outputDimensionality: 768`.
6. Prints the returned vector values.

```js
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const result = await ai.models.embedContent({
  model: GEMINI_EMBEDDING_MODEL,
  contents: text,
  config: {
    outputDimensionality: 768,
  },
});

console.log(result.embeddings[0].values);
```

The model can be overridden with `GEMINI_EMBEDDING_MODEL`; otherwise the scripts default to `gemini-embedding-001`.

### 2. Mathematical Similarity and Algorithm Evolution

`02_Math-Similarity.js` implements Cosine Similarity from first principles. It measures the angle between two vectors rather than comparing their words directly.

#### Formula

$$
	ext{Cosine Similarity}(A, B) = \frac{A \cdot B}{\|A\|\|B\|}
$$

Where:

- `$A \cdot B$` is the dot product: the sum of matching component products, `Σ(A[i] * B[i])`.
- `$\|A\|$` is the magnitude of vector `A`: `√Σ(A[i]²)`.
- `$\|B\|$` is the magnitude of vector `B`: `√Σ(B[i]²)`.
- A score closer to `1` indicates a similar direction; a score closer to `0` indicates little directional similarity.

#### Naive vs. Optimized Implementations

| Implementation                 | Loop strategy                                                            | Time complexity                                       | Strength                                          | Trade-off                                           |
| ------------------------------ | ------------------------------------------------------------------------ | ----------------------------------------------------- | ------------------------------------------------- | --------------------------------------------------- |
| Naive `cosineSimilarity`       | One loop for the dot product, then separate loops for each magnitude     | `O(3N)`, which simplifies to `O(N)` with three passes | Very readable and useful for learning the formula | Repeats traversal work for high-dimensional vectors |
| Optimized `cosineSimilarity02` | One loop calculates the dot product and both squared magnitudes together | `O(N)` with one pass                                  | Lower loop overhead and `O(1)` auxiliary space    | Slightly denser code to read                        |

The optimized implementation also validates both vector length and denominator safety:

```js
if (vecA.length !== vecB.length) {
  throw new Error("Vectors must have the same length");
}

// dotProduct, magnitudeA, and magnitudeB are accumulated in one pass.
if (magnitudeA === 0 || magnitudeB === 0) {
  return 0;
}
```

> **Safety check:** A zero vector has no direction. Returning `0` before division prevents a `NaN` result from a zero denominator.

### 3. Real-World Semantic Comparator

`03_Compute-actual-semantic-search.js` combines the embedding API and optimized similarity function in an end-to-end comparison. It creates embeddings for three queries using `taskType: 'SEMANTIC_SIMILARITY'`:

| Vector | Text                                  | Expected relationship             |
| ------ | ------------------------------------- | --------------------------------- |
| `v1`   | `What is html in web development?`    | Technical reference query         |
| `v2`   | `What is hyper text markup language?` | Semantically synonymous with `v1` |
| `v3`   | `London is capital city of England.`  | Unrelated geographic fact         |

The script calculates all pairwise scores involving these vectors:

| Comparison    | Meaning                                  | Expected result |
| ------------- | ---------------------------------------- | --------------- |
| `v1` vs. `v2` | HTML and its expanded name               | High similarity |
| `v1` vs. `v3` | Web-development question and London fact | Low similarity  |
| `v2` vs. `v3` | HTML definition and London fact          | Low similarity  |

```js
const result = await ai.models.embedContent({
  model: GEMINI_EMBEDDING_MODEL,
  contents: text1,
  config: {
    taskType: "SEMANTIC_SIMILARITY",
  },
});
```

The exact numeric scores can vary with model behavior and API updates, so the meaningful assertion is the relative ranking: the synonymous technical queries should be substantially closer than either technical query is to the unrelated fact.

## Getting Started

### Prerequisites

- Node.js installed locally.
- A Google Gemini API key with access to the embedding model.

### Install dependencies

From this project folder, run:

```bash
npm install
```

### Configure the API key

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_api_key_here
# Optional: override the default embedding model
# GEMINI_EMBEDDING_MODEL=gemini-embedding-001
```

Keep `.env` private and do not commit the API key to source control.

### Run the demonstrations

Each script is independent and can be run directly with Node.js:

```bash
node 01_Generate-Embeddings.js
node 02_Math-Similarity.js
node 03_Compute-actual-semantic-search.js
```

The first and third scripts make Google GenAI API requests and therefore require a valid `GEMINI_API_KEY`. The math script also performs local sample calculations, but it currently initializes the SDK and performs the same environment check.

## Key Takeaway

Embedding-based comparison represents text as vectors and evaluates their geometric relationship. That makes it possible to recognize that “HTML” and “hyper text markup language” are related even when their exact keywords differ, while separating both from an unrelated statement about London.
