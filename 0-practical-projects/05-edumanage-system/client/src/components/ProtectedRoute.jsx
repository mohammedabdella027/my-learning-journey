import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
    // Read the saved token
    const token = localStorage.getItem('token');

    // No token: send the user to the login page
    if (!token) {
        return <Navigate to="/" replace />;
    }

    return children;
}