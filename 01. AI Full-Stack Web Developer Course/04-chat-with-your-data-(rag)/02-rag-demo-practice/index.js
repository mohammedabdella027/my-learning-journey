import 'dotenv/config';
import express from 'express';
import { db } from './db/db.config.js';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const startSever = async () => {
    try {
        const connection = await db.getConnection();
        connection.release();

        app.listen(port, () => {
            console.log(`Rag demo server running at http://localhost:${port}`);
        })
    } catch (error) {
        console.error(
            'Faild to connect to MYSQL. Server not started.',
            error.message,
        )
        process.exit(1);
    }
};

startSever();