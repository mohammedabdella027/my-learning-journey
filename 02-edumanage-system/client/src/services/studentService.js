import Axios from 'axios';

// Instance API
const API = Axios.create({
    baseURL: 'http://localhost:3000/api/students',
})

// Send the saved token with every request
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

// Log the user out when the server rejects the token
API.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/';
        }

        return Promise.reject(error);
    }
);

// Get all students
export const getAllStudents = async () => {
    const response = await API.get('/');
    return response.data.data
}

// Get student by ID
export const getStudentById = async (id) => {
    const response = await API.get(`/${id}`);
    return response.data.data
}

// Create students
export const createStudent = async (studentData) => {
    const response = await API.post('/', studentData);
    return response.data.data;
}

// Update a students
export const UpdateStudent = async (id, studentData) => {
    const response = await API.put(`/${id}`, studentData);
    return response.data.data
}

// Delete a students
export const DeleteStudent = async (id) => {
    const response = await API.delete(`/${id}`);
    return response.data.message
}