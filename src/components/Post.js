import Divider from './Divider';
import Comment from './Comment';
import { UserContext } from '../UserContext';
import { useContext, useEffect, useState } from 'react';
const Post = (props) => {
    const { author, content, comments, likes } = props.post;
    const { userInfo } = useContext(UserContext);

    const [postLikes, setPostLikes] = useState(likes.length);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        if (likes.includes(userInfo._id)) {
            setLiked(true);
        }
    }, []);

    function like() {
        setLiked(!liked);
        if (liked) {
            setPostLikes(postLikes - 1);
        } else {
            setPostLikes(postLikes + 1);
        }
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
                console.log(data);
            });
        });
    }

    return (
        <div className="post">
            <div className="authorInfo">
                <img
                    className="profilePicture"
                    src={author.profilePictureUrl}
                    alt="profile"
                ></img>
                <div>
                    <div className="authorName">{author.fullName}</div>
                    <div className="date">{props.post.time_diff}</div>
                </div>
            </div>
            <div className="content">{content}</div>
            <div className="impressions">
                <div className="likes">
                    {postLikes} {postLikes === 1 ? 'Like' : 'Likes'}
                </div>
                <div className="commentsCount">
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
                    {liked ? 'Liked' : 'Like'}
                </button>
                <button>Comment</button>
                <button>Share</button>
            </ul>
            {comments.length > 0 && <Divider />}
            <div className="comments">
                {comments.map((comment, i) => {
                    return <Comment key={i} comment={comment}></Comment>;
                })}{' '}
            </div>
        </div>
    );
};

export default Post;
