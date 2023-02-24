import { useState } from 'react';
import Header from '../components/Header';
import '../styles/SignUp.css';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    function handleSubmit() {}

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
                    <button className="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
