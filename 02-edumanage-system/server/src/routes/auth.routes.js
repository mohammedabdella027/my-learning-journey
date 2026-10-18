import express from 'express';
import { loginController, registerController } from '../controllers/auth.controller.js';

const authRouter = express.Router();

// POST /api/auth/login
authRouter.post('/login', loginController);

// POST /api/auth/register
authRouter.post('/register', registerController);

export default authRouter;