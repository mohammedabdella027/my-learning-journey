/**
 * Read uploaded text from multer file or JSON body.
 * @param {import('express').Request} req
 * @returns {string}
 */
export const getUploadedText = req => {
    // Case 1: a .txt file was uploaded via multer (stored in memory as a buffer)
    if (req.file?.buffer) {
        return req.file.buffer.toString('utf-8');
    }

    const error = new Error(
        'Upload a .txt file using form field "file" or send JSON body { "text": "..." }.',
    );
    error.statusCode = 400;
    throw error;
};