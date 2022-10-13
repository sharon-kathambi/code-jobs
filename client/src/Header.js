import React from 'react'
import { Link } from 'react-router-dom';

function Header({ company, onLogout }) {
    function handleLogout() {
      fetch("/logout", {
        method: "DELETE",
      }).then(() => onLogout());
    }
  
    return (
      <header>
        <h1>
          <Link to="/">Code Jobs</Link>
        </h1>
        {company ? (
          <div>
            <p>Welcome, {company.name}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/login">Click Here to Login</Link>
        )}
      </header>
    );
  }
  

export default Header
