import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_EMBEDDING_MODEL = process.env.GEMINI_EMBEDDING_MODEL || 'gemini-embedding-001';

if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY environment variable is required');
}

// 1. Initialize the SDK
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

async function generateEmbedding () {
    const text = 'Hello, this is a test for vector embedding'

    try {
        // 2. Generate the embedding
        const result = await ai.models.embedContent({
            model: GEMINI_EMBEDDING_MODEL,
            contents: text,
            config: {
                outputDimensionality: 768,
            }
        })
        console.log(result.embeddings[0].values);
    } catch (error) {
        console.error('Error generating embedding:', error)
    }
}

generateEmbedding();