import { useState } from 'react';
import PostList from './components/PostList';
import MainHeader from './components/MainHeader';

function App() {

  const [showModal, setShowModal] = useState(false); 

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const showModalHandler = () => {
    setShowModal(true);
  };

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList showModal={showModal} hideModalHandler={hideModalHandler} />
      </main>
    </>
  )
}

export default App
