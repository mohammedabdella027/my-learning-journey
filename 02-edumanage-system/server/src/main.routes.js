import express from 'express';
import studentRouter from './routes/student.routes.js';

const mainRouter = express.Router();

// /api/students
mainRouter.use('/students', studentRouter);

export default mainRouter;