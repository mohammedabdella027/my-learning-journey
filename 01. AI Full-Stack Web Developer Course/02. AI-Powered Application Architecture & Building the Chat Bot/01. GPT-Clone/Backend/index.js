import 'dotenv/config'


import express from 'express';
import db from './db.config.js';
import mainRouter from './src/api/main.routes.js';

const app = express();

app.use('/api', mainRouter);

// app.post('api/chat/conversation', (req, res) => {
//     res.send('post method')
// })

// app.get('api/chat/conversation', (req,res) => {
//     res.send('get method')
// })

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