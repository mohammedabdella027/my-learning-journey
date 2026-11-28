import { validationResult } from 'express-validator';
import { StatusCodes } from 'http-status-codes';

export const validationErrorHandler = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(err => err.msg);
        const error = new Error(errorMessages.join('. '));
        error.statusCode = StatusCodes.BAD_REQUEST;
        throw error;
    }
    next();
};