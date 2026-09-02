import express from 'express'

const mainRouter = express.Router();

// /api/chat
mainRouter.use('/chat', (req, res) => {
    res.send("chat api")
})

export default mainRouter;