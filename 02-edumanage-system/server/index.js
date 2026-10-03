import dotenv from 'dotenv'
dotenv.config()

import express, { json } from 'express';
import cors from 'cors';
import mainRouter from './src/main.routes.js';
import db from './config/db.js'
import { errorHandler } from './src/middleware/error.middleware.js';

const app = express();

app.use(
    cors({
        origin: 'http://localhost:5173'
    })
)

app.use(express.json())

app.use('/api', mainRouter)

// Global Error Handler
app.use(errorHandler);

async function startServer () {
    try {
        const connection = await db.getConnection();
        connection.release();
        console.log('db connected');

        app.listen(3000, (err) => {
            if (err) {
                throw err
            }
            console.log("server listening on port http://localhost:3000")
        })
    }
    catch (err) {
        console.error('error starting server: ', err)
    }
}

startServer()