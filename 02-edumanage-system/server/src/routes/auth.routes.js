import express from 'express';
import { loginController } from '../controllers/auth.controller.js';

const authRouter = express.Router();

// POST /api/auth/login
authRouter.post('/login', loginController);

export default authRouter;