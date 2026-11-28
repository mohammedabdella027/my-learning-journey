import { StatusCodes } from 'http-status-codes';

export const errorHandler = (err, req, res, next) => {
    const customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        message: err.message || 'Something went wrong. please try again later.',
    };

    return res.status(customError.statusCode).json({
        success: false,
        message: customError.message,
    });
};