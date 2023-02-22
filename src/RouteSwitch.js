import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';
import LogIn from './routes/LogIn';
import User from './routes/User';
import App from './routes/App';
import './styles/App.css';
import Profile from './routes/Profile';
import { UserContextProvider } from './UserContext';

const RouteSwitch = () => {
    return (
        <UserContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/log-in" element={<LogIn />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/home" element={<App />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </UserContextProvider>
    );
};

export default RouteSwitch;
