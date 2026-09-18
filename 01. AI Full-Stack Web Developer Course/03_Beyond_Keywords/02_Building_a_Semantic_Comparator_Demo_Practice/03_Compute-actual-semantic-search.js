import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_EMBEDDING_MODEL = process.env.GEMINI_EMBEDDING_MODEL || 'gemini-embedding-001';

if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY environment variable is required');
}

// 1. Initialize the SDK
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

function cosineSimilarity (vecA, vecB) {
    // 0. Check if the vectors have the same length
    if (vecA.length !== vecB.length) {
        throw new Error ('Vectors must have the same length');
    }

    // 1. Dot Product (multipy matching components and sum)
    let dotProduct = 0;

    // 2. Magnitude (Length of each vectors)
    let magnitudeA = 0
    let magnitudeB = 0

    for (let i = 0; i < vecA.length; i++) {
        dotProduct += vecA[i] * vecB[i]
        magnitudeA += vecA[i] * vecA[i]
        magnitudeB += vecB[i] * vecB[i]
    }

    magnitudeA = Math.sqrt(magnitudeA)
    magnitudeB = Math.sqrt(magnitudeB)

    if (magnitudeA === 0 || magnitudeB === 0) {
        return 0;
    }

    return dotProduct / (magnitudeA * magnitudeB)
}

async function compareTexts () {
    // Assigning texts
    const text1 = "What is html in web development?"
    const text2 = "What is hyper text markup language?"
    const text3 = "London is capital city of England."

    //Generating embeddings
    const result1 = await ai.models.embedContent({
        model: GEMINI_EMBEDDING_MODEL,
        contents: text1,
        config: {
            taskType: 'SEMANTIC_SIMILARITY',
        },
    })

    const result2 = await ai.models.embedContent({
        model: GEMINI_EMBEDDING_MODEL,
        contents: text2,
        config: {
            taskType: 'SEMANTIC_SIMILARITY',
        },
    })

    const result3 = await ai.models.embedContent({
        model: GEMINI_EMBEDDING_MODEL,
        contents: text3,
        config: {
            taskType: 'SEMANTIC_SIMILARITY',
        },
    })

    const v1 = result1.embeddings[0].values;
    const v2 = result2.embeddings[0].values;
    const v3 = result3.embeddings[0].values;

    const v1Andv2 = cosineSimilarity(v1, v2);
    const v1Andv3 = cosineSimilarity(v1, v3);
    const v2Andv3 = cosineSimilarity(v2, v3);

    console.log('v1Andv2:', v1Andv2);
    console.log('v1Andv3:', v1Andv3);
    console.log('v2Andv3:', v2Andv3);
} 

compareTexts()