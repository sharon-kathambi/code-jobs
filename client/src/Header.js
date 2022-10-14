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
        <div>
        <h1>
          <Link to="/">Code Jobs</Link>
        </h1>
        {company ? (
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
            <>
          <Link to="/login">Click Here to Login</Link>
          <Link to="/signup">Click Here to SignUp</Link>
          </>
        )}
        </div>
      </header>
    );
  }
  

export default Header
