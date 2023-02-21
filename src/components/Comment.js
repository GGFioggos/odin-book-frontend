/* eslint-disable jsx-a11y/alt-text */
import '../styles/Comment.css';

const Comment = (props) => {
    const { author, content, likes } = props.comment;
    return (
        <div className="comment">
            <div className="top">
                <img
                    className="profilePicture"
                    src={author.profilePictureUrl}
                ></img>
                <div className="commentInfo">
                    <div className="authorName">{author.fullName}</div>
                    <div className="content">{content}</div>
                </div>
            </div>
            <div className="impressions">
                <div>{likes.length} Likes</div>
                <div className="date">{props.comment.time_diff}</div>
            </div>
        </div>
    );
};

export default Comment;
