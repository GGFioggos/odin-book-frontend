/* eslint-disable jsx-a11y/alt-text */
import { useState, React, useEffect } from 'react';
import '../styles/User.css';
import Divider from './Divider';
import Post from './Post';

const UserComponent = (props) => {
    const { user } = props;

    const [posts, setPosts] = useState(null);
    const [totalPosts, setTotalPosts] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/user/${user._id}/posts`, {
            method: 'GET',
            credentials: 'include',
        }).then((response) => {
            response.json().then((data) => {
                if (response.ok) {
                    console.log(data);
                    setPosts(data);
                } else {
                    alert('Error finding posts');
                }
            });
        });
    }, []);

    return (
        <div className="user">
            <div className="userInfo">
                <img
                    className="userProfilePicture"
                    src={user.profilePictureUrl}
                ></img>
                <div>
                    <div className="name">{user.fullName}</div>
                    <div className="friends">
                        {user.friends.length}{' '}
                        {user.friends.length === 1 ? 'Friend' : 'Friends'}
                    </div>
                    <button className="addFriend">Add friend</button>
                </div>
            </div>
            <Divider />
            <div className="feed">
                {posts != null && (
                    <div className="posts">
                        {posts.map((post, i) => (
                            <Post
                                key={i}
                                post={post}
                                setTotalPosts={setTotalPosts}
                            ></Post>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserComponent;
