import Modal from '../components/Modal';
import { Link, Form, redirect } from 'react-router-dom';
import classes from './NewPost.module.css';

const NewPost = () => {

  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" name="author" id="name" required />
        </p>
        <p className={classes.actions}>
          <Link type='button' to="/">Cancel</Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}) {
  console.log(request);
  const formData = await request.formData();
  console.log(formData);
  const postData = Object.fromEntries(formData);

  console.log(postData);

  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
        'Content-Type': 'application/json',
    },
  });

  return redirect('/');
};
