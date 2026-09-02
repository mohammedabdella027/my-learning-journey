export const errorHandler = (err, req, res, next) => {
    return res.status(500).json({
        status: false,
        message: 'something went wrong try again later',
    })
}