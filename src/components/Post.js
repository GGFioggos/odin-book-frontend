import Divider from './Divider';
import Comment from './Comment';
import { UserContext } from '../UserContext';
import { useContext, useEffect, useState } from 'react';
import {
    FaThumbsUp,
    FaTrashAlt,
    FaRegCommentAlt,
    FaShare,
} from 'react-icons/fa';
import CreateComment from './CreateComment';
import thumbsUp from '../assets/thumbsup.png';

const Post = (props) => {
    const { author, content, comments, likes } = props.post;
    const { setTotalPosts } = props;
    const { userInfo } = useContext(UserContext);

    const [postLikes, setPostLikes] = useState(likes.length);
    const [postComments, setPostComments] = useState(comments);
    const [liked, setLiked] = useState(false);
    const [commentsShown, setCommentsShown] = useState(false);

    // Make liked button 'liked' on load
    useEffect(() => {
        if (likes.includes(userInfo._id)) {
            setLiked(true);
        }
    }, []);

    function like() {
        fetch(
            `http://localhost:5000/api/post/${props.post._id}/${
                liked ? 'unlike' : 'like'
            }`,
            {
                method: 'POST',
                credentials: 'include',
            }
        ).then((response) => {
            response.json().then((data) => {
                if (response.ok) {
                    setLiked(!liked);
                    if (liked) {
                        setPostLikes(postLikes - 1);
                    } else {
                        setPostLikes(postLikes + 1);
                    }
                } else {
                    alert('Error liking post');
                }
            });
        });
    }

    function handleDelete() {
        fetch(`http://localhost:5000/api/post/${props.post._id}/delete`, {
            method: 'DELETE',
            credentials: 'include',
        }).then((response) => {
            response.json().then((data) => {
                if (response.ok) {
                    setTotalPosts((prevState) => {
                        return prevState - 1;
                    });
                } else {
                    alert(
                        `Error deleting post - ${data.error || data.message}`
                    );
                }
            });
        });
    }

    return (
        <div className="post">
            <div className="authorInfo">
                <a href={author.url}>
                    <img
                        className="profilePicture"
                        src={author.profilePictureUrl}
                        alt="profile"
                    ></img>
                </a>
                <div>
                    <a href={author.url}>
                        <div className="authorName">{author.fullName}</div>
                    </a>
                    <div className="date">{props.post.time_diff}</div>
                </div>
            </div>
            <div className="content">{content}</div>
            <div className="impressions">
                <div className="likes">
                    <img className="likeIcon" src={thumbsUp}></img>
                    <div className="numberOfLikes">{postLikes}</div>
                </div>
                <div
                    className="commentsCount"
                    onClick={() => setCommentsShown(!commentsShown)}
                >
                    {comments.length}{' '}
                    {comments.length === 1 ? 'Comment' : 'Comments'}
                </div>
            </div>
            <Divider />
            <ul className="actions">
                <button
                    onClick={like}
                    style={{
                        color: liked ? '#2d86ff' : 'white',
                    }}
                >
                    <FaThumbsUp
                        className="actionsIcon"
                        style={{
                            stroke: liked ? '#2d86ff' : '#9f9393',
                        }}
                    />
                    {liked ? 'Liked' : 'Like'}
                </button>
                <button onClick={() => setCommentsShown(!commentsShown)}>
                    <FaRegCommentAlt className="actionsIcon" />
                    Comment
                </button>
                <button>
                    <FaShare className="actionsIcon" />
                    Share
                </button>
            </ul>
            {commentsShown && <Divider />}
            <div
                className="comments"
                style={{
                    contentVisibility: commentsShown ? 'visible' : 'hidden',
                }}
            >
                <CreateComment
                    post={props.post}
                    setPostComments={setPostComments}
                />
                {postComments.map((comment, i) => {
                    return (
                        <Comment
                            key={i}
                            comment={comment}
                            post={props.post}
                        ></Comment>
                    );
                })}{' '}
            </div>
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

export default Post;
