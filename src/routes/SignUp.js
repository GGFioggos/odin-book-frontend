import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/SignUp.css';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [profilePictureUrl, setProfilePictureUrl] = useState('');
    const [errors, setErrors] = useState([]);
    const [redirect, setRedirect] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/api/auth/sign-up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password,
                passwordConfirm,
                profilePictureUrl,
            }),
            credentials: 'include',
        });
        const data = await response.json();
        // console.log(data);
        if (response.ok) {
            alert('User created!');
            setRedirect(true);
        } else {
            setErrors(data.error);
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />;
    }

    return (
        <div>
            <Header />
            <div className="sign-up">
                <form
                    onSubmit={handleSubmit}
                    action=""
                    method=""
                    className="signUpForm"
                >
                    <div className="title">Sign Up</div>
                    <input
                        type="text"
                        name="firstName"
                        className="firstName"
                        placeholder="First name"
                        onChange={(e) => setFirstName(e.target.value)}
                    ></input>
                    <input
                        type="text"
                        name="lastName"
                        className="lastName"
                        placeholder="Last name"
                        onChange={(e) => setLastName(e.target.value)}
                    ></input>
                    <input
                        type="email"
                        name="email"
                        className="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <input
                        type="password"
                        name="password"
                        className="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <input
                        type="password"
                        name="confirmPassword"
                        className="confirmPassword"
                        placeholder="Confirm password"
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                    ></input>
                    <input
                        type="url"
                        name="profilePictureUrl"
                        className="profilePictureUrl"
                        placeholder="Profile Picture (URL)"
                        onChange={(e) => setProfilePictureUrl(e.target.value)}
                    ></input>
                    <button className="submit">Sign Up</button>
                    <ul className="errors">
                        {errors.map((err, i) => (
                            <li key={i} className="error">
                                {err.msg}
                            </li>
                        ))}
                    </ul>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
