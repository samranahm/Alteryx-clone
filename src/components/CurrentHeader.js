import React from 'react';
import { Link } from 'react-router-dom';
import './CurrentHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const CurrentHeader = ({ submitLogout }) => {
  return (
    <div className="current-home-header">
      <div className='menu-container'>
        <Link to="/register" className="menu-button">Register</Link>
        <button className="menu-button">Why us</button>
        <button className="menu-button">Product</button>
        <button className="menu-button">Solution</button>
        <button className="menu-button">About Us</button>
      </div>
      <div className="support-container">
        <button className="support-button">Support</button>
        <button className="support-button">Community</button>
        <Link to="/features" className="support-button">Features</Link>
        <Link to="/Contact" className="support-button">Contact Us</Link>
        <button className="support-button">English</button>
        <button className="support-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className='logout-button-container'>
        <button className="button logout" onClick={submitLogout}>Log out</button>
      </div>
    </div>
  );
};

export default CurrentHeader;
