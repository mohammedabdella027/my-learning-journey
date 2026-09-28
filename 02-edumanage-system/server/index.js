import express from 'express';
import cors from 'cors';

const app = express();

app.use(
    cors({
        origin: 'http://localhost:5173'
    })
)

app.get('/api', (req, res) => {
    res.send('hey from get')
})

app.post('/api', (req, res) => {
    res.send('hey from post')
})

app.listen('3000', () => {
    console.log("server listening on port 3000")
})