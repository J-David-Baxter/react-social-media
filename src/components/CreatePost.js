import React, { useContext, useRef, useState } from 'react'
import { PostContext } from '../App';

const CreatePost = ({ user }) => {
  const { dispatch } = useContext(PostContext);
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const imageInputRef = useRef();
  
  function handleSubmit(e) {
    e.preventDefault();
    const post = { content, image, user, id: Date.now() };
    dispatch({ type: "ADD_POST", payload: { post } });
    setContent('');
    imageInputRef.current.value = '';
    setImage(null);
  }

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder= "Add Post Content"
          onChange={e => setContent(e.target.value)}
          value={content}
          required
        />
        <input 
          type="file"
          onChange={e => setImage(e.target.files[0])}
          ref={imageInputRef}
        />
        <button type='submit'>Submit Post</button>
      </form>
    </div>
  )
}

export default CreatePost