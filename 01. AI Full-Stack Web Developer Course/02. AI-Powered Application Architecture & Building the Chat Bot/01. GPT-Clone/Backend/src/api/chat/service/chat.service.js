export async function createConversationService(question) {
    try {
        return `chat saved to db with question: ${question}`
    } catch (error) {
        throw error
    }
}