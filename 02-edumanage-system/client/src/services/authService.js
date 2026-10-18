import axios from 'axios';

// Auth API instance
const API = axios.create({
    baseURL: 'http://localhost:3000/api/auth',
});

// Log in with email and password
export const login = async (credentials) => {
    const response = await API.post('/login', credentials);

    return response.data.data;
};

// Create a new account
export const register = async (userData) => {
    const response = await API.post('/register', userData);
    
    return response.data.data;
};