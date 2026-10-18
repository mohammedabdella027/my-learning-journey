import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/authService.js';

export default function LoginPage() {
    const [data, setData] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrorMessage('');
        setLoading(true);

        try {
            const result = await login(data);

            localStorage.setItem('token', result.token);
            navigate('/dashboard');
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'Unable to reach the server');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 font-sans">
            <form
                className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm w-full max-w-sm space-y-5"
                onSubmit={handleSubmit}
            >
                {/* Title */}
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-800 mb-1">Welcome back</h1>
                    <p className="text-sm text-slate-500">Sign in to manage students</p>
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        value={data.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-slate-50 focus:bg-white border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                </div>

                {/* Password */}
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        value={data.password}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-slate-50 focus:bg-white border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                </div>

                {/* Error message */}
                {errorMessage && (
                    <div
                        role="alert"
                        className="bg-red-50 rounded-lg p-3 text-red-700 border border-red-200 text-sm"
                    >
                        {errorMessage}
                    </div>
                )}

                {/* Submit */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-lg text-sm shadow-sm hover:shadow transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {loading ? 'Signing in...' : 'Login'}
                </button>

                {/* Link to register */}
                <p className="text-center text-sm text-slate-500">
                    No account yet?{' '}
                    <Link to="/register" className="font-semibold text-blue-600 hover:text-blue-700">
                        Create account
                    </Link>
                </p>
            </form>
        </div>
    );
}