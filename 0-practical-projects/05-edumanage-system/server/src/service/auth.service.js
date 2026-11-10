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

export const registerUser = async (userData) => {
    const { name, email, password } = userData;

    // Validate the input
    if (!name || !email || !password) {
        const error = new Error('must provide name, email and password');
        error.status = 400;
        throw error;
    }

    if (password.length < 6) {
        const error = new Error('Password must be at least 6 characters');
        error.status = 400;
        throw error;
    }

    // Check if the email already exists
    const [rows] = await db.query('SELECT id FROM users WHERE email = ?', [email]);

    if (rows[0]) {
        const error = new Error('Email already registered');
        error.status = 409;
        throw error;
    }

    // Hash the password, never save it as plain text
    const passwordHash = await bcrypt.hash(password, 10);

    // Save the user
    const [result] = await db.query(
        'INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)',
        [name, email, passwordHash]
    );

    return { id: result.insertId, name, email };
};