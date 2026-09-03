import db from '../../../../db/db.config.js';

// get recent conversation row from db
const getRecentConversationRows = async (limit = 5) => {
    const normalizedLimit = Number.parseInt(limit, 10);
    const safeLimit = 
    Number.isNaN(normalizedLimit) || normalizedLimit <= 0
    ? 20
    : normalizedLimit;

    const [rows] = await db.execute(
        `SELECT id, role, content, created_at
        FROM conversations
        ORDER BY id DESC
        LIMIT ${safeLimit}`
    );
    return rows.reverse();
}

export async function createConversationService(question) {
    try {
        //Validation
        if (!question.trim()) {
            const error = new Error('Question is required');
            error.status = 400;
            throw error
        }

        // get recent conversations
        const historyRows = await getRecentConversationRows(5)

        // insert new coversations
        const [result] = await db.execute(
            'INSERT INTO conversations (content, role) VALUES (?, "user")',
            [question],
        );

        return {
            historyRows
        }

    } catch (error) {
        throw error
    }
}