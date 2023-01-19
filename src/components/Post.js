import React, { useContext } from 'react'
import { UserContext } from '../App'

const Post = ({ image, content, user }) => {
  const currentUser = useContext(UserContext);
  
  return ( 
    <>
      {image && (
        <img 
          style={{ height: 100, width: 200, objectFit: 'cover' }}
          src={URL.createObjectURL(image)}
          alt='Post cover'
        />
      )}
      <p>{content}</p>
      <div style={{ color: currentUser === user && 'green' }}>{user}</div>
    </>
  )
}

export default Post