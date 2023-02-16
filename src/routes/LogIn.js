import React, { useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
// import components

const LogIn = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUserInfo } = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:5000/api/auth/log-in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
            credentials: 'include',
        });
        if (response.ok) {
            const data = await response.json();
            setUserInfo(data.user);
            setRedirect(true);
        } else {
            alert('Wrong credentials');
        }
    };

    if (redirect) {
        return <Navigate to={'/'} />;
    }
    return (
        <div className="body">
            <form onSubmit={handleSubmit} action="" method="POST">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    className="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button className="submit">Log In</button>
            </form>
        </div>
    );
};

export default LogIn;
