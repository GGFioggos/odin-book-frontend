/* eslint-disable jsx-a11y/alt-text */
import { UserContext } from '../UserContext';
import React, { useContext, useState } from 'react';
import '../styles/CreateComment.css';

const CreateComment = (props) => {
    const post = props.post;
    const { setPostComments } = props;

    const { userInfo } = useContext(UserContext);

    const [commentContent, setCommentContent] = useState(null);

    function handleChange(e) {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;
        setCommentContent(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await fetch(
            `http://localhost:5000/api/post/${post._id}/comment`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: commentContent }),
                credentials: 'include',
            }
        );
        const data = await response.json();
        console.log(data);
        setPostComments((prevState) => {
            return [
                ...prevState,
                {
                    author: userInfo,
                    content: commentContent,
                    timestamp: Date.now(),
                    likes: [],
                },
            ];
        });
    }

    return (
        <div className="createComment">
            <img
                className="profilePicture"
                src={userInfo.profilePictureUrl}
            ></img>
            <textarea
                className="area"
                onChange={handleChange}
                placeholder="Write a comment..."
                maxLength={500}
            ></textarea>
            <button onClick={handleSubmit}>Post</button>
        </div>
    );
};

export default CreateComment;
