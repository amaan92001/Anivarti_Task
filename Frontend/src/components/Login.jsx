import React, { useState } from 'react';
import axios from 'axios';

function Login({ onLoginSuccess }) {
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = async () => {
        try {
            setError('');
            const response = await axios.post('https://anivarti-task.onrender.com/login', form);
            onLoginSuccess();
        } catch (error) {
            setError(error.response ? error.response.data : 'Error logging in');
        }
    };

    return (
        <div className="form-container bg-gray-100 p-6 rounded-lg shadow-md max-w-sm mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800">Login</h2>
            <input
                className="w-full p-2 mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleInputChange}
            />
            <input
                className="w-full p-2 mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleInputChange}
            />
            <button
                className="w-full p-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={handleLogin}
            >
                Login
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
}

export default Login;
