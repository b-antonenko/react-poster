import { useState } from 'react';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';
import classes from './NewPost.module.css';

const NewPost = ({ onAddPost }) => {

  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  const onBodyChangeHandler = (e) => setEnteredBody(e.target.value);
  const onAuthorChangeHandler = (e) => setEnteredAuthor(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };

    onAddPost(postData);

   /// onCancel();
  };

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={onBodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={onAuthorChangeHandler} />
        </p>
        <p className={classes.actions}>
          <Link type='button' to="/">Cancel</Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;