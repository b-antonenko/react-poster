import PostList from '../components/PostList';
import { MOCKAPI_BASE_URL, REQUEST_HEADERS } from '../constants/constants';
import { Outlet } from 'react-router-dom';

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  try {
    const response = await fetch(MOCKAPI_BASE_URL, {
      method: "GET",
      headers: REQUEST_HEADERS,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    
    return data;
  } catch (error) {
    throw new Response("Failed to load data", { status: 500 });
  }
}
