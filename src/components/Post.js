import Divider from './Divider';

const Post = (props) => {
    const { author, content, comments, likes } = props.post;

    return (
        <div className="post">
            <div className="authorInfo">
                <img
                    className="profilePicture"
                    src={author.profilePictureUrl}
                    alt="profile"
                ></img>
                <div>
                    <div className="firstName">{author.firstName}</div>
                    <div className="date">{props.post.time_diff}</div>
                </div>
            </div>
            <div className="content">{content}</div>
            <div className="impressions">
                <div className="likes">
                    {likes.length} {likes.length === 1 ? 'Like' : 'Likes'}
                </div>
                <div className="commentsCount">
                    {comments.length}{' '}
                    {comments.length === 1 ? 'Comment' : 'Comments'}
                </div>
            </div>
            <Divider />
            <ul className="actions">
                <li>Like</li>
                <li>Comment</li>
                <li>Share</li>
            </ul>
            {comments.length > 0 && <Divider />}
            <div className="comments">
                {comments.map((comment, i) => {
                    return <div key={i}>{comment.content}</div>;
                })}{' '}
            </div>
        </div>
    );
};

export default Post;
