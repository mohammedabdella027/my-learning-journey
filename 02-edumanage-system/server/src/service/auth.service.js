import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../../config/db.js';

export const loginUser = async (credentials) => {
    // 1. Take email and password out of credentials
    const { email, password } = credentials;

    // 2. If one is missing, throw a 400 error
    if (!email || !password) {
        const error = new Error('must provide email and password');
        error.status = 400;
        throw error;
    }

    // 3. Find the user by email
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    const user = rows[0];

    // 4. If no user was found, throw a 401 error
    if (!user) {
        const error = new Error('Invalid email or password');
        error.status = 401;
        throw error;
    }

    // 5. Compare the typed password with the saved hash
    const isMatch = await bcrypt.compare(password, user.password_hash);

    // If it does not match, throw a 401 error
    if (!isMatch) {
        const error = new Error('Invalid email or password');
        error.status = 401;
        throw error;
    }

    // 6. Create the token
    const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    // 7. Return the token and the public user data
    return {
        token,
        user: { id: user.id, name: user.name, email: user.email },
    };
};