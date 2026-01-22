import React from 'react';
import './Hero.css';
import profileImg from '../../assets/profile.png';

const Hero = () => {
    return (
        <div className='hero-container' id='hero'>
            <div className='hero-bg'></div>
            <div className='hero-content container'>
                <div className='hero-img-container'>
                    <img src={profileImg} alt="Razil K P" className='hero-img' />
                </div>
                <p className='hero-subtitle'>Hi, I'm</p>
                <h1 className='hero-title'>Razil K P</h1>
                <h2 className='hero-role'>
                    Aspiring Full Stack Web Developer <br />
                    <span className='highlight'>MERN & WordPress Expert</span>
                </h2>
                <p className='hero-desc'>
                    Building scalable web applications with React, Node.js, and WordPress.
                    Passionate about creating real-world solutions.
                </p>
                <div className='hero-btns'>
                    <a href='#projects' className='btn btn-primary'>View Projects</a>
                    <a href='#contact' className='btn btn-outline'>Contact Me</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
