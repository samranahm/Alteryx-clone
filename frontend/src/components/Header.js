import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const ButtonGroup = () => {
  return (
    <div className="home-header">
      <div className='menu-container'>
      <Link to="/register" className="menu-button">Register</Link>
      <button className="menu-button">Why us</button>
      <button className="menu-button">Product</button>
      <button className="menu-button">Solution</button>
      <button className="menu-button">About Us</button>
      </div>
      <dev className="support-container">
      <button className="support-button">Support</button>
      <button className="support-button">Community</button>
      <Link to="/features" className="support-button">Features</Link>
      <Link to="/Contact" className="support-button">Contact Us</Link>
      <button className="support-button">English</button>
      <button className="support-button">
      <  FontAwesomeIcon icon={faSearch} />
              </button>
      </dev>
      <div className='register-container'>
        <Link to="/login" id="form_btn"className='login-button'>Log In</Link>
        <Link to="/register" id="form_btn"className='signup-button'>Sign Up</Link>
        </div>
      
    </div>
  );
};

export default ButtonGroup;
