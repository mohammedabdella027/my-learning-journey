import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import mainRouter from './src/api/main.routes.js';
import { errorHandler } from './src/middleware/error-handler.js';

const app = express();

app.use(
    cors({
        origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    })
);

app.use(express.json());

app.use('/api', mainRouter);

// Final middleware for error handling
app.use(errorHandler);

export default app;