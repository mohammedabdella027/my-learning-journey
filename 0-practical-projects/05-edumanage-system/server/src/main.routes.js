import express from 'express';
import studentRouter from './routes/student.routes.js';
import authRouter from './routes/auth.routes.js';
import { authMiddleware } from './middleware/auth.middleware.js';

const mainRouter = express.Router();

// /api/students
mainRouter.use('/students', authMiddleware, studentRouter);

// /api/auth
mainRouter.use('/auth', authRouter);

export default mainRouter;