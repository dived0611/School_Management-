import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

export default function Layout() {
    const [isDark, setIsDark] = useState(false);

    return (
        <div className={isDark ? 'dark' : ''}>
            <header className="bg-white dark:bg-gray-900 shadow">
                <nav className="max-w-10xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        📚 SchoolMS
                    </div>
                    <div className="flex items-center gap-6">
                        <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                            Home
                        </Link>
                        <Link to="/login" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                            Login
                        </Link>
                        <Link to="/users" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                            Users
                        </Link>
                        <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Register
                        </Link>

                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>
                </nav>
            </header>
            <main className="dark:bg-gray-900 dark:text-white min-h-screen  p-6">
                <Outlet />
            </main>
            <footer className="bg-gray-800 dark:bg-gray-950 text-white text-center py-4">
                <p>&copy; 2023 School Management System</p>
            </footer>
        </div>
    );
}