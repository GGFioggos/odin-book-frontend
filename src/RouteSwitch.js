import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';
import LogIn from './routes/LogIn';
import User from './routes/User';
import App from './routes/App';
import './styles/App.css';
import { UserContextProvider } from './UserContext';
import SignUp from './routes/SignUp';

const RouteSwitch = () => {
    return (
        <UserContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/home" element={<App />} />
                    <Route path="/log-in" element={<LogIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/user/:id" element={<User />} />
                </Routes>
            </BrowserRouter>
        </UserContextProvider>
    );
};

export default RouteSwitch;
