import { useLoaderData } from 'react-router-dom';
import Post from './Post';
import classes from './PostList.module.css';

const PostList = () => {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post id={post.id} key={post.id} body={post.body} author={post.author} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div className={classes.noItemsWrapper}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostList;
