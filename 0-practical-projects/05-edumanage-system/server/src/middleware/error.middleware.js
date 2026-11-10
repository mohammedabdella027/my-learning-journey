export const errorHandler = (err, req, res, next) => {
    const StatusCode = err.status || 500;

    res.status(StatusCode).json({
        success: false,
        message: err.message || "Internal Server Error"
    })
}