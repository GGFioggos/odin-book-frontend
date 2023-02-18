import { useEffect, useState } from 'react';
import Post from './Post';
import '../styles/Post.css';

const Feed = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/user/feed', {
            method: 'GET',
            credentials: 'include',
        }).then((response) => {
            response.json().then((data) => {
                setPosts(data);
            });
        });
    }, []);

    return (
        <div className="feed">
            <h1>Feed</h1>
            {posts == null && <div>No posts to show. Come back later!</div>}
            {posts != null && (
                <div className="posts">
                    {posts.map((post, i) => (
                        <Post key={i} post={post}></Post>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Feed;