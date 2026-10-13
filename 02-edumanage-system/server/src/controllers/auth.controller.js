import { loginUser } from '../service/auth.service.js';

export const loginController = async (req, res, next) => {
    try {
        const login = await loginUser(req.body);

        res.status(200).json({
            success: true,
            message: 'Login successful',
            data: login,
        });
    } catch (error) {
        next(error);
    }
};