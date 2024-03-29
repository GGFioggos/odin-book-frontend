/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';
import '../styles/Comment.css';
import thumbsUp from '../assets/thumbsup.png';
import { FaTrashAlt } from 'react-icons/fa';

const Comment = (props) => {
    const { author, content, likes } = props.comment;
    const { post } = props;
    const [liked, setLiked] = useState(false);
    const [commentLikes, setCommentLikes] = useState(likes.length);

    const { userInfo } = useContext(UserContext);

    useEffect(() => {
        if (likes.includes(userInfo._id)) {
            setLiked(true);
        }
    }, []);

    function like() {
        fetch(
            `http://localhost:5000/api/post/${post._id}/${props.comment._id}/${
                liked ? 'unlike' : 'like'
            }`,
            {
                method: 'POST',
                credentials: 'include',
            }
        ).then((response) => {
            response.json().then((data) => {
                console.log(data);
                if (response.ok) {
                    setLiked(!liked);
                    if (liked) {
                        setCommentLikes(commentLikes - 1);
                    } else {
                        setCommentLikes(commentLikes + 1);
                    }
                } else {
                    alert('Error liking post');
                }
            });
        });
    }

    function handleDelete() {
        console.log('delete comment');
    }

    return (
        <div className="comment">
            <a href={author.url}>
                <img
                    className="profilePicture"
                    src={author.profilePictureUrl}
                ></img>
            </a>
            <div className="commentInfo">
                <a href={author.url}>
                    <div className="authorName">{author.fullName}</div>
                </a>
                <div className="content">{content}</div>
                <div className="impressions">
                    <div className="date">{props.comment.time_diff}</div>
                    <div className="likes">
                        <img className="likeIcon" src={thumbsUp}></img>
                        <div className="numberOfLikes">{commentLikes} </div>
                    </div>
                </div>
            </div>
            <button
                onClick={like}
                className="likeComment"
                style={{
                    color: liked ? '#2d86ff' : 'rgb(214, 212, 212)',
                }}
            >
                {liked ? 'Liked' : 'Like'}
            </button>
            <FaTrashAlt
                className="trashIcon"
                onClick={handleDelete}
                style={{
                    visibility:
                        userInfo._id === author._id ? 'visible' : 'hidden',
                }}
            />
        </div>
    );
};

export default Comment;
