import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#" className="logo">Razil K P.</a>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#hero" className="nav-links" onClick={toggleMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={toggleMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-links" onClick={toggleMenu}>Skills</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-links" onClick={toggleMenu}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-links" onClick={toggleMenu}>Services</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
