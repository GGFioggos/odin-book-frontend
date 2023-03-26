/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import { UserContext } from '../UserContext';
import { useContext, useEffect, useState } from 'react';
import Notifications from './Notifications';
const Header = () => {
    const { setUserInfo, userInfo } = useContext(UserContext);
    const [friendRequests, setFriendRequests] = useState([]);
    const [notificationsShown, setNotificationsShown] = useState(false);

    const navigate = useNavigate();

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
                    console.log(data);
                    setUserInfo(data.user);
                    setFriendRequests(data.user.friendRequests);
                }
            });
        });
    }, []);

    function logOut() {
        fetch('http://localhost:5000/api/auth/log-out', {
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null);
        navigate('/');
    }

    return (
        <div className="header">
            <Link to={'/'} className="title">
                Odin-Book
            </Link>
            <ul id="options">
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
                        <Notifications
                            notificationsShown={notificationsShown}
                            setNotificationsShown={setNotificationsShown}
                            friendRequests={friendRequests}
                            setFriendRequests={setFriendRequests}
                        />
                        <li>
                            <Link
                                to={userInfo.url}
                                onClick={() =>
                                    (window.location.href = userInfo.url)
                                }
                            >
                                Profile
                            </Link>
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
