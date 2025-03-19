import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostList.module.css';

const PostList = () => {

    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    const [showModal, setShowModal] = useState(true); 

    const onBodyChangeHandler = (e) => setEnteredBody(e.target.value);
    const onAuthorChangeHandler = (e) => setEnteredAuthor(e.target.value);

    const hideModalHandler = () => {
        setShowModal(false);
    };

    return (
        <>
        {showModal && 
            <Modal onClose={hideModalHandler}>
                <NewPost 
                    onBodyChange={onBodyChangeHandler} 
                    onAuthorChange={onAuthorChangeHandler} 
                />
            </Modal>}
        <ul className={classes.posts}>
            <Post author={enteredAuthor} body={enteredBody} />
            <Post author="hello" body="world" />
            <Post author="hello" body="world" />
        </ul>
        </>
    );
};

export default PostList;