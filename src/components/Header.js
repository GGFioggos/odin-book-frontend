/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, Navigate } from 'react-router-dom';
import '../styles/Header.css';
import { UserContext } from '../UserContext';
import { useContext, useEffect, useState } from 'react';
import { FaBell } from 'react-icons/fa';
import Divider from './Divider';
import FriendRequest from './FriendRequest';

const Header = () => {
    const { setUserInfo, userInfo } = useContext(UserContext);
    const [friendRequests, setFriendRequests] = useState([]);

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
                        <ul className="notifications">
                            <FaBell className="notificationsIcon" />
                            <li>
                                <div className="friendRequests">
                                    Friend Requests
                                </div>
                                <Divider />
                                {friendRequests.length === 0 && (
                                    <div>No new friend requests</div>
                                )}
                                {friendRequests.length !== 0 &&
                                    friendRequests.map((friendRequest, i) => (
                                        <FriendRequest
                                            request={friendRequest}
                                            key={i}
                                            requestKey={i}
                                            setFriendRequests={
                                                setFriendRequests
                                            }
                                        ></FriendRequest>
                                    ))}
                            </li>
                        </ul>
                        <li>
                            <Link to={userInfo.url}>Profile</Link>
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
