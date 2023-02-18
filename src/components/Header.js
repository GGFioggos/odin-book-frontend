/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { UserContext } from '../UserContext';
import { useContext, useEffect } from 'react';

const Header = () => {
    const { setUserInfo, userInfo } = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/api/user/', {
            method: 'GET',
            credentials: 'include',
        }).then((response) => {
            response.json().then((data) => {
                if (data.error === 'User not authorized') {
                    setUserInfo(null);
                }
                if (data.user) {
                    setUserInfo(data.user);
                }
            });
        });
    }, []);

    function logOut() {
        fetch('http://localhost:5000/api/auth/log-out', {
            credentials: 'include',
            method: 'POST',
        });
        window.localStorage.setItem('isLoggedIn', false);
        setUserInfo(null);
    }

    return (
        <div className="header">
            <Link to={'/'} className="title">
                Odin-Book
            </Link>
            <ul className="options">
                {!userInfo && (
                    <>
                        <li>
                            <Link to={'/log-in'}>Log in</Link>
                        </li>
                        <li>
                            <Link to={'/sign-up'}>Sign up</Link>
                        </li>
                    </>
                )}
                {userInfo && (
                    <>
                        <li>
                            <Link to={'/log-in'}>Create Post</Link>
                        </li>
                        <li>
                            <a onClick={logOut}>Log out</a>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default Header;
