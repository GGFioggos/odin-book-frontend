import React, { useState, useEffect } from 'react';
// import components

const LogIn = (props) => {
    const user = props.user;
    const setUser = props.setUser;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:5000/api/auth/log-in', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        const data = await response.json();
        console.log(data);
        // if (data.user) {
        //     localStorage.setItem('token', data.token);
        // }
    };

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
