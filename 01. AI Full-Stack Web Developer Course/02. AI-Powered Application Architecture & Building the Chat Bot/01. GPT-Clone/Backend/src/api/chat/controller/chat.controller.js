import { createConversationService } from "../service/chat.service.js"
import { GoogleGenAI } from '@google/genai';

const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.0-flash-lite";
const geminiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function createConversationController(req, res) {
    try {
        const { question } = req.body

        const result = await createConversationService(question);

        res.status(201).json({
            success: true,
            message: 'conversation posted successfully',
            data: result,
        });
    } catch (error) {
        throw error
    }
}

export async function getConversationController(req, res) {
    try {
        res.send('get conversations api')
    } catch (error) {
        throw error
    }
}