import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import UserComponent from '../components/UserComponent';
import '../styles/User.css';

const User = () => {
    const { id } = useParams();

    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/user/${id}`, {
            method: 'GET',
            credentials: 'include',
        }).then((response) => {
            response.json().then((data) => {
                if (response.ok) {
                    setUser(data);
                } else {
                    alert('Error finding user');
                }
            });
        });
    }, []);

    return (
        <>
            <Header />
            <div className="user">
                {user !== null && (
                    <>
                        <UserComponent user={user} />
                    </>
                )}

                {user === null && <div>User not found</div>}
            </div>
        </>
    );
};

export default User;
