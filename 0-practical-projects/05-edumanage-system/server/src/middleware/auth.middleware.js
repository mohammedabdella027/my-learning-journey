import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    // 1. Read the Authorization header
    const authHeader = req.headers.authorization;

    // 2. Reject the request if the header is missing or is not a Bearer token
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        const error = new Error('Authentication required');
        error.status = 401;
        return next(error);
    }

    // 3. Take the token out of the header
    const token = authHeader.split(' ')[1];

    try {
        // 4. Verify the token and keep the user data on the request
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (err) {
        // 5. A changed, fake, or expired token is rejected
        const error = new Error('Invalid or expired token');
        error.status = 401;
        next(error);
    }
};