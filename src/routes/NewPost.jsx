import Modal from '../components/Modal';
import { Link, Form, redirect } from 'react-router-dom';
import { MOCKAPI_BASE_URL, REQUEST_HEADERS } from '../constants/constants';
import classes from './NewPost.module.css';

const NewPost = () => {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" name="author" id="name" required />
        </p>
        <p className={classes.actions}>
          <Link type="button" to="/">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
};

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  try {
    const response = await fetch(MOCKAPI_BASE_URL, {
      method: 'POST',
      headers: REQUEST_HEADERS,
      body: JSON.stringify(postData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return redirect('/');
  } catch (error) {
    console.log(error);
    throw new Response("Failed to load data", { status: 500 });
  }
}
