import express from "express";

// Initialize Express application instance
const app = express();

// Custom Middleware 1: Logs requested URL and HTTP method
function logger (req, res, next) {
    const url = req.url
    const method = req.method
    console.log(url, method);
    next() // Pass execution to the next middleware in line
}

// Custom Middleware 2: Secondary logging middleware
function loggerSecond (req, res, next) {
    console.log("logger from second");
    next()
}

// Route-specific Middleware: Executes only for routes starting with '/api'
function apiLogger (req, res, next) {
    console.log("logger from api");
    next()
}

// Global Error Handling Middleware: Takes 4 arguments (err, req, res, next)
function errorHandler (err, req, res, next) {
    console.log(err.message)
    res.status(500).send('internal server error')
}

// Home Route: Demonstrates synchronous error triggering
app.get('/', (req, res) => {
    throw new Error ('home error')
    // res.send("hello world!");
})

// Register global middleware array (runs on all subsequent routes)
app.use([logger, loggerSecond]);

// Mount route-specific middleware for all /api endpoints
app.use('/api', apiLogger)

// General route definition
app.get('/about', (req, res) => {
    res.send('hello from about')
})

// API endpoints
app.get('/api/chat', (req, res) => {
    res.send("hello form chat")
})

app.get('/api/conv', (req, res) => {
    res.send("from conv")
})

// Register error handling middleware at the end of the stack
app.use(errorHandler)

// Start HTTP server on port 3210
app.listen(3210, () => {
    console.log("server is running on port http://localhost:3210");
});