import { Route, HashRouter, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
// import App from './App';
import LogIn from './routes/LogIn';

const RouteSwitch = () => {
    const [user, setUser] = useState(null);

    return (
        <HashRouter basename="/">
            <Routes>
                <Route
                    path="/"
                    element={<LogIn user={user} setUser={setUser} />}
                />
                <Route path="/home" /*element={<App />} */ />
                <Route path="/profile" /* element={<Profile />} */ />
                <Route path="/user" /* element={<User />} */ />
            </Routes>
        </HashRouter>
    );
};

export default RouteSwitch;
