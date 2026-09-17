import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_EMBEDDING_MODEL = process.env.GEMINI_EMBEDDING_MODEL || 'gemini-embedding-001';

if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY environment variable is required');
}

// =======================================================================================
// MATHEMATICAL FORMULA: COSINE SIMILARITY
//
// Formula:  Cosine Similarity = (A · B) / (||A|| * ||B||)
//
// Where:
//   - A · B        = Dot Product (sum of matching element products: ∑(A[i] * B[i]))
//   - ||A||        = Magnitude of Vector A (sqrt(∑(A[i]²)))
//   - ||B||        = Magnitude of Vector B (sqrt(∑(B[i]²)))
//   - Score Range  = -1.0 (Opposite) to 1.0 (Identical Direction)
// =======================================================================================


// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
/**
 * Naive Cosine Similarity Implementation
 * 
 * ADVANTAGES:
 * - High Readability: Step-by-step separation makes the mathematical formula crystal clear.
 * - Educational: Excellent for deeply understanding dot product and magnitude mechanics.
 * 
 * DISADVANTAGES:
 * - Performance Overhead: Multiple independent loops increase computational cost (O(3N) iterations).
 * - Latency: Slower execution when processing large multi-dimensional vectors (e.g., 768d or 1536d embeddings).
 * 
 * NOTE: Written for practice and conceptual learning; refactoring to a single-pass loop is recommended for production.
 */

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

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

/**
 * Optimized Single-Pass Cosine Similarity Implementation
 * 
 * ADVANTAGES:
 * - Single-Pass Efficiency: Computes dot product and both vector magnitudes in a single O(N) loop iteration.
 * - Reduced Latency: Significantly faster execution when processing high-dimensional embedding vectors (e.g., 768d).
 * - Division-by-Zero Safety: Explicitly checks for zero-magnitude vectors to prevent NaN results.
 * 
 * COMPUTATIONAL COMPLEXITY:
 * - Time Complexity: O(N) where N is the vector dimensionality (3x faster loop execution than naive version).
 * - Space Complexity: O(1) auxiliary space.
 */

function cosineSimilarity02 (vecA, vecB) {
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

console.log(cosineSimilarity02 ([5,1], [10,2]))