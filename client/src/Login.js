import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Login({onLogin}) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e){
        e.preventDefault();
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, password})
        })
        .then((r) => r.json())
        .then((company) => onLogin(company))
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <label htmlFor="username">Username: </label>
        <input 
        type='text'
        id="name"
        autoComplete='off'
        value={name}
        onChange={(e) => setName(e.target.value)}/>

<label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Sign in</button>
      </form>
    </div>
  )
}

export default Login

