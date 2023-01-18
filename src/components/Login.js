import React, { useState } from "react";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('')
  
  function handleSubmit(e) {
    e.preventDefault();
    setUser(username);
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Input username"
          onChange={e => setUsername(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login;