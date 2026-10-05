
function DashboardPage() {
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
        </div>
    )
}

export default DashboardPage