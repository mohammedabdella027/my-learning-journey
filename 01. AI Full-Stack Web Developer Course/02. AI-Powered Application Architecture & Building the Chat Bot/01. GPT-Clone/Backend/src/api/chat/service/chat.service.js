import db from '../../../../db/db.config.js';

export async function createConversationService(question) {
    try {
        //Validation
        if (!question.trim()) {
            const error = new Error('Question is required');
            error.status = 400;
            throw error
        }

        // Save to db
        db.execute('INSERT INTO conversation (content) VALUES (?)', [
            question,
        ])

        return `chat saved to db with question: ${question}`
    } catch (error) {
        throw error
    }
}