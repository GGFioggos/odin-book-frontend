import { UserContext } from '../UserContext';
import React, { useState, useContext } from 'react';
import '../styles/CreatePost.css';

const CreatePost = () => {
    const { userInfo } = useContext(UserContext);
    const [postContent, setPostContent] = useState('');

    function handleChange(e) {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;
        setPostContent(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/api/post/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: postContent }),
            credentials: 'include',
        });
        const data = await response.json();
        console.log(data);
    }

    return (
        <div className="createPost">
            <img
                className="profilePicture"
                src={userInfo.profilePictureUrl}
            ></img>
            <textarea
                className="area"
                onChange={handleChange}
                placeholder="What's on your mind?"
                maxLength={600}
            ></textarea>
            <button onClick={handleSubmit}>Post</button>
        </div>
    );
};

export default CreatePost;
