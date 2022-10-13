import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Login({onLogin}) {
    const [name, setName] = useState('')

    function handleSubmit(e){
        e.preventDefault();
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name})
        })
        .then((r) => r.json())
        .then((company) => onLogin(company))
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h3>Login With Username</h3>
      <label htmlFor="username">Username: </label>
        <input 
        type='text'
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}/>
        <Link to='/jobs/:id'>
        <button type='submit'>Sign in</button>
        </Link>
      </form>
    </div>
  )
}

export default Login

