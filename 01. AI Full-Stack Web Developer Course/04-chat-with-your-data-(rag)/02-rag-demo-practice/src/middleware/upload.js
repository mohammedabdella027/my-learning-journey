import multer from 'multer';

const uploadTextFile = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const isText =
            file.mimetype === 'text/plain' || file.originalname.endsWith('.txt');

        if (!isText) {
            const error = new Error('Only .txt files are allowed.');
            error.statusCode = 400;
            return cb(error);
        }

        cb(null, true);
    },
}).single('file');

export const handleTextUpload = (req, res, next) => {
    uploadTextFile(req, res, err => {
        if (err) {
            err.statusCode = err.statusCode || 400;
            return next(err);
        }
        next();
    });
};