import React, { useState } from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import MembersDirectory from './components/MembersDirectory';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLogin, setShowLogin] = useState(true);

    const handleToggle = () => {
        setShowLogin(!showLogin);
    };


    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    if (isLoggedIn) {
        return <MembersDirectory />;
    }

    return (
        <div className="App">
            <h1 className="text-4xl font-bold text-blue-600">Anivarti Community Website</h1>
            <div className="mt-8">
                {showLogin ? (
                    <Login onLoginSuccess={handleLoginSuccess} toggleRegister={handleToggle} />
                ) : (
                    <Register />
                )}
                <button
                    className=" p-2 mt-4 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                    onClick={handleToggle}
                >
                    {showLogin ? 'New user? Register here' : 'Already registered? Login'}
                </button>
            </div>
        </div>
    );
}

export default App;
