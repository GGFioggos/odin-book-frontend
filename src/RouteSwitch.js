import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
// import App from './App';
import LogIn from './routes/LogIn';
import User from './routes/User';
import App from './routes/App';

const RouteSwitch = () => {
    const [user, setUser] = useState(null);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/log-in"
                    element={<LogIn user={user} setUser={setUser} />}
                />
                <Route path="/user" element={<User />} />
                <Route path="/home" /*element={<App />} */ />
                <Route path="/profile" /* element={<Profile />} */ />
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;
