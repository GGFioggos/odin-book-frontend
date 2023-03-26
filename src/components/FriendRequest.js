/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import '../styles/FriendRequest.css';

const FriendRequest = (props) => {
    const user = props.request;
    const key = props.requestKey;
    const { setFriendRequests } = props;

    function acceptFriendRequest() {
        fetch(`http://localhost:5000/api/user/request/${user._id}/accept`, {
            method: 'POST',
            credentials: 'include',
        }).then((response) => {
            response.json().then((data) => {
                if (response.ok) {
                    alert('Friend added successfully');
                    setFriendRequests((current) =>
                        current.filter((request, i) => i !== key)
                    );
                } else {
                    alert(data.error || data.message);
                }
            });
        });
    }

    function declineFriendRequest() {
        fetch(`http://localhost:5000/api/user/request/${user._id}/decline`, {
            method: 'POST',
            credentials: 'include',
        }).then((response) => {
            response.json().then((data) => {
                if (response.ok) {
                    alert('Friend request declined');
                    setFriendRequests((current) =>
                        current.filter((request, i) => i !== key)
                    );
                } else {
                    alert(data);
                }
            });
        });
    }

    return (
        <div className="friendRequest">
            <a href={user.url}>
                <img
                    src={user.profilePictureUrl}
                    className="profilePicture"
                ></img>
            </a>
            <a href={user.url}>
                <div className="name">{user.fullName}</div>
            </a>
            <div className="accept" onClick={acceptFriendRequest}>
                Accept
            </div>
            <div className="decline" onClick={declineFriendRequest}>
                Decline
            </div>
        </div>
    );
};

export default FriendRequest;
