import express from 'express';

const chatRouter = express.Router();
import {createConversationController, getConversationController} from './controller/chat.controller.js'

// /api/chat/conversations

chatRouter.post('/conversations', createConversationController)

chatRouter.get('/conversations', getConversationController)

export default chatRouter;