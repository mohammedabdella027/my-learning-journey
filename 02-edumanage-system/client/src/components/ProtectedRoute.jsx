import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
    // 💡 Fix: Assign the token to a variable
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to={'/'} replace/>;
    } else {
        return children;
    }
}
