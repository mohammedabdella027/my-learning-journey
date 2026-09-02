import 'dotenv/config'


import express from 'express';
import db from './db.config.js';
import mainRouter from './src/api/main.routes.js';
import { errorHandler } from './src/middleware/error-handler.js';

const app = express();
app.use(express.json())

app.use('/api', mainRouter);

//final middlware for error handling
app.use(errorHandler)

async function startServer() {
    try {
        const connection = await db.getConnection();
        connection.release();
        console.log('db connected')

        app.listen(3000, err => {
            if (err) {
                throw err
            }

            console.log("server is running on port http://localhost:3000")
        });
    } catch (err) {
        console.error('error starting server: ', err)
    }
}

startServer();