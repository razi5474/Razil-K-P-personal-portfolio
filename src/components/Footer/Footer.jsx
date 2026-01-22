import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container container'>
                <div className='footer-socials'>
                    <a href="https://www.linkedin.com/in/razil-kp/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/razi5474" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="mailto:rasrasil69@gmail.com"><FaEnvelope /></a>
                </div>
                <p className='footer-copy'>&copy; {new Date().getFullYear()} Razil K P. All rights reserved.</p>
                <p className='footer-credit'>Built with React & Vite</p>
            </div>
        </footer>
    );
};

export default Footer;
