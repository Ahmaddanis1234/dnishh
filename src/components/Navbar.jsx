// src/components/Navbar.js
import React from 'react';
import '../styles/navbar.css'; // Jika A   nda ingin menambahkan gaya khusus
import image from '../assets/R.gif'

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            MyApp
          </a>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a href="#home" className="navbar-link">
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link">
                About
              </a>
            </li>
            <li className="navbar-item">
              <a href="#services" className="navbar-link">
                Services
              </a>
            </li>
            <li className="navbar-item">
              <a href="#contact" className="navbar-link">
                Contact
            
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  