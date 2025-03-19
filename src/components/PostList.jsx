import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostList.module.css';

const PostList = ({ showModal, hideModalHandler }) => {

    const [posts, setPosts] = useState([]);

    const addPost = (data) => {
        setPosts((currentState) => [data, ...currentState]);
    };

    return (
        <>
        {showModal && 
            <Modal onClose={hideModalHandler}>
                <NewPost 
                    onCancel={hideModalHandler}
                    onAddPost={addPost}
                />
            </Modal>}
        {posts.length > 0 ? 
            <ul className={classes.posts}>
                {posts.map((post) => <Post key={`${post.author}${post.body}`} body={post.body} author={post.author} />)}
            </ul> 
                : 
            <div className={classes.noItemsWrapper}>
                <h2>There are no posts yet.</h2>
                <p>Start adding some!</p>
            </div>
        }  
        </>
    );
};

export default PostList;