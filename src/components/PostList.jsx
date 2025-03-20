import { useState, useEffect } from 'react';
import Post from './Post';
import classes from './PostList.module.css';

const PostList = () => {

    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    const addPost = (data) => {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        setPosts((currentState) => [data, ...currentState]);
    };

    useEffect(() => {
        const fetchPosts = async () => {
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts');
            const result = await response.json();
            setPosts(result.posts);
            setIsFetching(false);
        };
        
        fetchPosts();
    }, []);

    return (
        <>
            {!isFetching && posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => <Post key={`${post.author}${post.body}`} body={post.body} author={post.author} />)}
                </ul>       
            )    
            }
            {!isFetching && posts.length === 0 && (
                <div className={classes.noItemsWrapper}>
                    <h2>There are no posts yet.</h2>
                <p>Start adding some!</p>
            </div>
            )}
            {isFetching && (
                <div className={classes.loadingWrapper}>
                    <p>Loading posts...</p>
                </div>
            )}  
        </>
    );
};

export default PostList;