import { StatusCodes } from 'http-status-codes';
import { getUploadedText } from '../../../utils/ingest-text.js'

export const postMysqlController = async (req, res, next) => {
    try {
        const text = getUploadedText(req);
        console.log(text);

        res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Documents chunked, embeded, and stored in mysql',
        })
    } catch (error) {
        next(error);
    }
};