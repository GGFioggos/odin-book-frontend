import React, { useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../components/Header';
import { UserContext } from '../UserContext';
import '../styles/LogIn.css';
import FormErrors from '../components/FormErrors';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [errors, setErrors] = useState([]);
    const { setUserInfo, userInfo } = useContext(UserContext);

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
        const data = await response.json();
        if (response.ok) {
            if (data.user) {
                setUserInfo(data.user);
                setRedirect(true);
            }
        } else {
            setErrors([data.error]);
        }
    };

    if (redirect) {
        return <Navigate to={'/'} />;
    }

    if (userInfo) {
        return <Navigate to={'/'} />;
    }

    return (
        <div>
            <Header />
            <div className="log-in">
                <form
                    onSubmit={handleSubmit}
                    action=""
                    method="POST"
                    className="logInForm"
                >
                    <div className="title">Login to Odin-Book</div>
                    <input
                        type="email"
                        name="email"
                        className="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    ></input>

                    <input
                        name="password"
                        type="password"
                        className="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    ></input>
                    <button className="submit">Log In</button>
                    <FormErrors errors={errors} />
                </form>
            </div>
        </div>
    );
};

export default LogIn;
