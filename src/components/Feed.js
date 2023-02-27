import { useEffect, useState } from 'react';
import Post from './Post';
import '../styles/Post.css';
import CreatePost from './CreatePost';

const Feed = () => {
    const [posts, setPosts] = useState(null);
    const [totalPosts, setTotalPosts] = useState(null);

    useEffect(() => {
        console.log('tsitsi');
        fetch('http://localhost:5000/api/user/feed', {
            method: 'GET',
            credentials: 'include',
        }).then((response) => {
            response.json().then((data) => {
                setPosts(data);
            });
        });
    }, [totalPosts]);

    return (
        <div className="feed">
            <CreatePost setTotalPosts={setTotalPosts} />
            {(posts == null || posts?.length === 0) && (
                <div>No posts for now. Come back later!</div>
            )}
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
    );
};

export default Feed;
