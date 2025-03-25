import { useLoaderData, Link, redirect, Form } from 'react-router-dom';
import { MdOutlineDeleteOutline } from "react-icons/md";
import Modal from '../components/Modal';
import { MOCKAPI_BASE_URL, REQUEST_HEADERS } from '../constants/constants';
import classes from './PostDetails.module.css';

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <Form method="delete" className={classes.form}>
          <p className={classes.author}>{post.author}</p>
          <p className={classes.text}>{post.body}</p>
          <div className={classes.removeBtnContainer}>
            <button className={classes.btn1}><MdOutlineDeleteOutline /></button>
          </div>
        </Form>
      </main>
    </Modal>
  );
}

export default PostDetails;

export const postDetailsLoader = async ({params}) => {
  try {
    const response = await fetch(`${MOCKAPI_BASE_URL}/${params.id}`, {
      method: "GET",
      headers: REQUEST_HEADERS,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

export async function action({ params }) {
  const { id } = params; 
  
  try {
    const response = await fetch(`${MOCKAPI_BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: REQUEST_HEADERS,
    });

    if (response.ok) {
      return redirect('/'); 
    }

  } catch (error) {
    console.error("error:", error);
  }
}
