import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validateInputs = () => {
        if (form.name.length <= 4) {
            setError('Name must be more than 4 characters.');
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            setError('Please enter a valid email address.');
            return false;
        }
        if (form.password.length < 8) {
            setError('Password must be at least 8 characters long.');
            return false;
        }
        return true;
    };

    const handleRegister = async () => {
        if (!validateInputs()) {
            return;
        }

        try {
            setError('');
            setSuccess('');
            const response = await axios.post('https://anivarti-task.onrender.com/register', form);
            setSuccess(response.data);
            setForm({ name: '', email: '', password: '' });
        } catch (error) {
            setError(error.response ? error.response.data : 'Error registering');
        }
    };

    return (
        <div className="form-container bg-gray-100 p-6 rounded-lg shadow-md max-w-sm mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800">Register</h2>
            <input
                className="w-full p-2 mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleInputChange}
            />
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
                onClick={handleRegister}
            >
                Register
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            {success && <p className="text-green-500 mt-2">{success}</p>}
        </div>
    );
}

export default Register;
