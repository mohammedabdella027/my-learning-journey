import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_EMBEDDING_MODEL = process.env.GEMINI_EMBEDDING_MODEL || 'gemini-embedding-001';

if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY environment variable is required');
}

// Cosine Similarity = (A . B) / (||A|| * ||B||)

function cosineSimilarity (vecA, vecB) {
    // 0. Check if the vectors have the same length
    if (vecA.length !== vecB.length) {
        throw new Error ('Vectors must have the same length');
    }

    // 1. Dot Product (multipy matching components and sum)
    let dotProduct = 0;

    for (let i = 0; i < vecA.length; i++) {
        dotProduct += vecA[i] * vecB[i]
    }

    // 2. Magnitude (Length of each vectors)
    let magnitudeA = 0
    let magnitudeB = 0

    for (let i = 0; i < vecA.length; i++) {
        magnitudeA += vecA[i] * vecA[i]
    }

    magnitudeA = Math.sqrt(magnitudeA)

    for (let i = 0; i < vecB.length; i++) {
        magnitudeB += vecB[i] * vecB[i]
    }

    magnitudeB = Math.sqrt(magnitudeB)

    return dotProduct / (magnitudeA * magnitudeB)
}

console.log(cosineSimilarity ([1,9], [2,0]))