import React from 'react';
import { Button } from "react-bootstrap";
import '../assets/css/Navbar.css'; 

const Navbar = () => {
  const total = 25000;
  const token = false;


  return (
    <nav className="navbar">
      <div className="navbar-content">
        <span className="navbar-title">Pizzería Mamma Mia!</span>
        <div className="navbar-buttons">
          <Button>🍕 Home</Button>
          {token ? (
            <>
              <Button>🔓 Profile</Button>
              <Button>🔒 Logout</Button>
            </>
          ) : (
            <>
              <Button>🔐 Login</Button>
              <Button>🔐 Register</Button>
            </>
          )}
        </div>
      </div>
      <div className='total-button'>
            <Button id="Total">🛒 Total: ${total.toLocaleString()}</Button>
        </div>
    </nav>
  );
};

export default Navbar;