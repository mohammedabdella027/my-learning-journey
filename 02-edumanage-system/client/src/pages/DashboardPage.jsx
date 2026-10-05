import { useState, useEffect } from 'react';
import { getAllStudents } from '../services/studentService';

function DashboardPage() {
    // 1. State Management hooks
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // 2. Side Effect hook to fetch data on component mount
    useEffect(() => {
        const fetchStudents = async () => {
            try {
                setLoading(true)
                const data = await getAllStudents();
                setStudents(data);
            } catch (err) {
                setError(err.message || 'Failed to fetch students');
            } finally {
                setLoading(false)
            }
        };

        fetchStudents();
    }, []);
    return (
        <div className="p-4 sm:p-8 max-w-7xl mx-auto font-sans bg-slate-50 min-h-screen">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800 mb-1">Student Management</h1>
                    <p className="text-sm text-slate-500">Manage and monitor registered students</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md transition duration-200 shadow-sm w-full sm:w-auto text-center">
                    + Add New Student
                </button>
            </div>

            {/* Loading State */}
            {loading && (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center text-slate-500 border border-slate-200">
                    Loading student records...
                </div>
            )}

            {/* Error State */}
            {error && (
                <div className="bg-red-50 rounded-lg shadow-sm p-4 mb-6 text-red-700 border border-red-200 text-sm">
                    <span className="font-semibold">Error: </span> {error}
                </div>
            )}

            {/* Data Display Section (Responsive Table Card) */}
            {!loading && !error &&(
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-150">
                            <thead>
                                <tr className="bg-slate-100 border-b border-slate-200">
                                    <th className="p-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">ID</th>
                                    <th className="p-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Name</th>
                                    <th className="p-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Email</th>
                                    <th className="p-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Course</th>
                                    <th className="p-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {students.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="p-6 text-center text-slate-400 text-sm">
                                            No students found.
                                        </td>
                                    </tr>
                                ) : (
                                    students?.map((student) => (
                                        <tr key={student.id} className="hover:bg-slate-50 transition">
                                            <td className="p-4 text-sm text-slate-700">{student.id}</td>
                                            <td className="p-4 text-sm font-medium text-slate-900">{student.name}</td>
                                            <td className="p-4 text-sm text-slate-600">{student.email}</td>
                                            <td className="p-4 text-sm text-slate-600">{student.course}</td>
                                            <td className="p-4 text-sm space-x-2">
                                                <button className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-xs font-medium transition">
                                                    Edit
                                                </button>
                                                <button className="px-3 py-1 bg-red-50 hover:bg-red-100 text-red-700 rounded text-xs font-medium transition">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DashboardPage