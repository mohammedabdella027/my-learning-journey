# RAG Demo API Documentation

Express API for teaching Retrieval-Augmented Generation (RAG) with three vector stores: **MySQL**, **Pinecone**, and **ChromaDB**.

**Base URL:** `http://localhost:3788`  
**API prefix:** `/api`

---

## Setup

```bash
cd backend
cp .env.example .env
# Add GEMINI_API_KEY and other keys to .env
npm install
npm run dev
```

**MySQL:** create the database first (required — the API server checks the DB connection on startup, even when you only use Chroma or Pinecone):

```bash
mysql -u root -p < db/schema.sql
```

**ChromaDB:** install root dependencies, start the local Chroma server, then use the API.

1. From `backend/`, add `GEMINI_API_KEY` to `.env` (embeddings and answers use Gemini).
2. In a **second terminal**, from the project root (`rag-demo/`):

```bash
cd ..
npm install    # installs the chroma CLI (not just backend deps)
npm run chroma # starts Chroma on http://localhost:8000
```

3. Keep the backend running (`npm run dev` in `backend/`).

**Storage:** vectors persist on disk at `rag-demo/chroma-data/` (created on first `npm run chroma`). The Express API does not write files directly — it talks to the Chroma server over HTTP.

**Optional env** (in `backend/.env`):

| Variable            | Default             | Purpose                       |
| ------------------- | ------------------- | ----------------------------- |
| `CHROMA_COLLECTION` | `evangadi-handbook` | Collection name inside Chroma |

---

## Health Check

### `GET /health`

| Item   | Value     |
| ------ | --------- |
| Method | `GET`     |
| Path   | `/health` |

**Success `200`**

```json
{
  "status": "ok",
  "timestamp": "2026-06-07T12:00:00.000Z"
}
```

---

## MySQL RAG

### `POST /api/mysql`

Upload a `.txt` file, split it into chunks (one line = one chunk), embed with Gemini (`RETRIEVAL_DOCUMENT`), and store vectors in MySQL.

| Item         | Value                                       |
| ------------ | ------------------------------------------- |
| Method       | `POST`                                      |
| Path         | `/api/mysql`                                |
| Content-Type | `multipart/form-data` or `application/json` |

**Option A — file upload (Postman)**

1. Method: `POST`
2. URL: `http://localhost:3788/api/mysql`
3. Body → **form-data**
4. Key: `file` (type: File) → select `evangadi-info.txt`
5. Send

**Option B — raw text (JSON)**

```json
{
  "text": "Evangadi was founded by Adugna to help people learn coding.\nThe Full Stack course takes 6 months to complete."
}
```

**Success `201`**

```json
{
  "success": true,
  "message": "Documents chunked, embedded, and stored in MySQL.",
  "data": {
    "chunkCount": 177,
    "store": "mysql"
  }
}
```

---

### `GET /api/mysql`

Query the MySQL RAG assistant.

| Item         | Value                 |
| ------------ | --------------------- |
| Method       | `GET`                 |
| Path         | `/api/mysql`          |
| Query params | `question` (required) |

**Example**

```
GET http://localhost:3788/api/mysql?question=How%20long%20is%20the%20course?
```

**Success `200`**

```json
{
  "success": true,
  "message": "Query answered successfully.",
  "data": {
    "question": "How long is the course?",
    "bestMatches": [
      "Evangadi course 'AI Powered Fullstack Application Development' runs for 6 Months...",
      "The Full Stack course is delivered fully online over six months...",
      "Courses include weekly live classes and mentor support..."
    ],
    "score": 0.8421,
    "answer": "The AI Powered Fullstack course runs for 6 months.",
    "store": "mysql"
  }
}
```

**Flow**

1. Embed the question with `QUESTION_ANSWERING`
2. Compare against all stored vectors using cosine similarity
3. Send the top matches to Gemini as context
4. Return the generated answer

---

## Pinecone RAG

### `POST /api/pinecone`

Same ingest flow as MySQL, but stores vectors in Pinecone.

| Item   | Value           |
| ------ | --------------- |
| Method | `POST`          |
| Path   | `/api/pinecone` |

Requires `PINECONE_API_KEY` and `PINECONE_INDEX` in `.env`.

**Success `201`**

```json
{
  "success": true,
  "message": "Documents chunked, embedded, and stored in Pinecone.",
  "data": {
    "chunkCount": 177,
    "store": "pinecone",
    "index": "evangadi-handbook"
  }
}
```

---

### `GET /api/pinecone`

| Item         | Value                 |
| ------------ | --------------------- |
| Method       | `GET`                 |
| Path         | `/api/pinecone`       |
| Query params | `question` (required) |

**Example**

```
GET http://localhost:3788/api/pinecone?question=Where%20is%20Evangadi%20located?
```

**Success `200`**

```json
{
  "success": true,
  "message": "Query answered successfully.",
  "data": {
    "question": "Where is Evangadi located?",
    "bestMatches": [
      "Evangadi headquarters is located in Maryland, USA.",
      "Evangadi also operates a regional office in Addis Ababa, Ethiopia."
    ],
    "score": 0.8912,
    "answer": "Evangadi is headquartered in Maryland, USA.",
    "store": "pinecone",
    "index": "evangadi-handbook"
  }
}
```

---

## ChromaDB RAG

**Requires:**

- Chroma server running (`npm run chroma` from project root — see [Setup](#setup))
- `GEMINI_API_KEY` in `backend/.env`
- MySQL reachable (backend won't start without it)
- Data on disk: `rag-demo/chroma-data/`

---

### `POST /api/chroma-db`

Same ingest flow as MySQL, stores vectors in a local ChromaDB collection. Each upload replaces the previous collection.

| Item         | Value                                       |
| ------------ | ------------------------------------------- |
| Method       | `POST`                                      |
| Path         | `/api/chroma-db`                            |
| Content-Type | `multipart/form-data` or `application/json` |

**Option A — file upload (Postman)**

1. Method: `POST`
2. URL: `http://localhost:3788/api/chroma-db`
3. Body → **form-data**
4. Key: `file` (type: File) → select `evangadi-info.txt`
5. Send

**Option B — raw text (JSON)**

```json
{
  "text": "Evangadi was founded by Adugna to help people learn coding.\nThe Full Stack course takes 6 months to complete."
}
```

**Success `201`**

```json
{
  "success": true,
  "message": "Documents chunked, embedded, and stored in ChromaDB.",
  "data": {
    "chunkCount": 177,
    "store": "chroma-db",
    "collection": "evangadi-handbook"
  }
}
```

---

### `GET /api/chroma-db`

| Item         | Value                 |
| ------------ | --------------------- |
| Method       | `GET`                 |
| Path         | `/api/chroma-db`      |
| Query params | `question` (required) |

**Example**

```
GET http://localhost:3788/api/chroma-db?question=Who%20founded%20Evangadi?
```

**Success `200`**

```json
{
  "success": true,
  "message": "Query answered successfully.",
  "data": {
    "question": "Who founded Evangadi?",
    "bestMatches": [
      "Evangadi was founded by Adugna to help people learn coding...",
      "The Evangadi network grew out of a free online Q&A forum..."
    ],
    "score": 0.8754,
    "answer": "Evangadi was founded by Adugna.",
    "store": "chroma-db",
    "collection": "evangadi-handbook"
  }
}
```

---

## Error Responses

All errors return:

```json
{
  "success": false,
  "message": "Error description here"
}
```

| Status | When                                                           |
| ------ | -------------------------------------------------------------- |
| `400`  | Missing file/text, invalid file type, missing `question` param |
| `404`  | No documents indexed yet (run POST first)                      |
| `500`  | Missing API keys or server misconfiguration                    |
| `503`  | Chroma server not running                                      |

---

## Endpoint Summary

| Method | Endpoint         | Purpose                  |
| ------ | ---------------- | ------------------------ |
| `POST` | `/api/mysql`     | Ingest `.txt` → MySQL    |
| `GET`  | `/api/mysql`     | Query MySQL assistant    |
| `POST` | `/api/pinecone`  | Ingest `.txt` → Pinecone |
| `GET`  | `/api/pinecone`  | Query Pinecone assistant |
| `POST` | `/api/chroma-db` | Ingest `.txt` → ChromaDB |
| `GET`  | `/api/chroma-db` | Query ChromaDB assistant |

---

## Project Structure

```
backend/
├── index.js
├── API.md
├── db/
│   ├── db.config.js
│   └── schema.sql
└── src/
    ├── api/
    │   ├── routes.js
    │   ├── mysql/
    │   ├── pinecone/
    │   ├── chroma-db/
    │   └── shared/validation/
    ├── middleware/
    └── utils/
```
