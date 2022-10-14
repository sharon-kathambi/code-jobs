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
            <section>
          <Link to="/login"><button>Click Here to Login</button></Link>
          <Link to="/signup"><button>Click Here to SignUp</button></Link>
          </section>
        )}
        </div>
      </header>
    );
  }
  

export default Header
