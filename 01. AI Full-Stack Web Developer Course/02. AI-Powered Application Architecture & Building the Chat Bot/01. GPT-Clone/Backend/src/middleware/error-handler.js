export const errorHandler = (err, req, res, next) => {
    console.log('error in request: ', err.message)
    return res.status(err.status || 500).json({
        status: false,
        message: err.message || 'something went wrong try again later',
    })
}