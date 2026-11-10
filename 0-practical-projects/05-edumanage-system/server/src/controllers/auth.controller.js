import { loginUser, registerUser } from '../service/auth.service.js';

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

export const registerController = async (req, res, next) => {
    try {
        const result = await registerUser(req.body);

        res.status(201).json({
            success: true,
            message: 'Registration successful',
            data: result,
        });
    } catch (error) {
        next(error);
    }
};