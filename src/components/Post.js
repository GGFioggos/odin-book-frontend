const Post = (props) => {
    const { author, content, timestamp, comments, likes } = props.post;

    return (
        <div className="post">
            <div className="authorInfo">
                <img
                    className="profilePicture"
                    src={author.profilePictureUrl}
                    alt="profile"
                ></img>
                <div className="firstName">{author.firstName}</div>
            </div>
            <div className="content">{content}</div>
            <div className="impressions">
                <div className="likes">{likes.length} Likes</div>
                <div className="commentsCount">{comments.length} Comments</div>
            </div>
            <div className="actions">
                <div>Like</div>
                <div>Comment</div>
            </div>

            <div className="comments">
                {comments.map((comment, i) => {
                    return <div key={i}>{comment.content}</div>;
                })}{' '}
            </div>
        </div>
    );
};

export default Post;
