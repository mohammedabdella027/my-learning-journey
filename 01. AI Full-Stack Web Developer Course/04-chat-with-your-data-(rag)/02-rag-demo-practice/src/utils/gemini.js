import { GoogleGenAI } from '@google/genai';

// Single shared client instance, authenticated with the Gemini API key
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Model that turns text into embedding vectors (used for similarity search)
const EMBEDDING_MODEL =
  process.env.GEMINI_EMBEDDING_MODEL || 'gemini-embedding-001';
// Chat model that writes the final natural-language answer
const CHAT_MODEL = process.env.GEMINI_CHAT_MODEL || 'gemini-2.5-flash-lite';

/**
 * Embed a stored document chunk.
 * taskType RETRIEVAL_DOCUMENT optimizes the vector for being searched against.
 * @param {string} text - The chunk of text to embed
 * @returns {Promise<number[]>} The embedding vector
 */
export const getDocumentEmbedding = async text => {
  const result = await ai.models.embedContent({
    model: EMBEDDING_MODEL,
    contents: text,
    config: { taskType: 'RETRIEVAL_DOCUMENT' },
  });
  // embeddings is an array (one per input); we sent one string so take [0]
  return result.embeddings[0].values;
};

/**
 * Embed a user's question.
 * taskType QUESTION_ANSWERING tunes the vector for matching against documents.
 * @param {string} question - The user's question
 * @returns {Promise<number[]>} The embedding vector
 */
export const getQueryEmbedding = async question => {
  const result = await ai.models.embedContent({
    model: EMBEDDING_MODEL,
    contents: question,
    config: { taskType: 'QUESTION_ANSWERING' },
  });
  return result.embeddings[0].values;
};

/**
 * Generate the final answer (the "G" in RAG) from the retrieved context.
 * The prompt grounds the model in the context and tells it to admit when
 * the answer isn't there, which reduces hallucination.
 * @param {{ question: string, context: string[] }} args - context is an array
 *   of retrieved chunks (a single string is also accepted for convenience)
 * @returns {Promise<string>} The generated answer text
 */
export const generateAnswer = async ({ question, context }) => {
  // Normalize to an array so callers can pass one or many context chunks
  const contextChunks = Array.isArray(context) ? context : [context];

  // Number each chunk so the model can treat them as distinct sources
  const contextBlock = contextChunks
    .map((chunk, index) => `[${index + 1}] ${chunk}`)
    .join('\n\n');

  const prompt = `You are a friendly Evangadi assistant.
Your role is to help users find accurate information from the organization's knowledge base.

Answer the user's question using ONLY the retrieved context below.

Rules:
- Be warm, approachable, and conversational — like a helpful front-desk assistant.
- Ground every fact in the numbered passages. Do not use outside knowledge.
- If the context does not fully answer the question:
  - Say so politely in your own words (do not use a fixed phrase).
  - Gently steer the user back: suggest 1–2 related topics you can help with, based on the retrieved passages.
  - Invite them to ask about Evangadi — courses, programs, team, location, and similar topics.
  - Never invent facts to fill the gap.
- If the context is partial, share what is supported and kindly note what is unavailable.
- If passages conflict, note the conflict and prefer the most specific passage.
- Keep answers short, clear, and easy to read.
- Do not invent names, dates, numbers, or policies.

Retrieved context:
${contextBlock}

User question: ${question}

Answer:`;

  const result = await ai.models.generateContent({
    model: CHAT_MODEL,
    contents: prompt,
  });

  // .text concatenates all text parts of the response into one string
  return result.text;
};
