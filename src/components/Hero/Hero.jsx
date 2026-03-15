import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import './Hero.css';
import profileImg from '../../assets/profile.png';
import Scene from './Scene';

const Hero = () => {
    const containerRef = useRef();
    const imgSectionRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline();
        
        // Colorful background glow animation
        gsap.to('.hero-colorful-glow', {
            scale: 1.1,
            rotation: 10,
            duration: 6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Entrance Animations
        tl.from('.hero-title', { 
            y: 50, 
            opacity: 0, 
            duration: 1, 
            ease: "power4.out" 
        })
        .from('.hero-desc', { 
            y: 30, 
            opacity: 0, 
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.6")
        .from('.hero-btns .hero-btn', { 
            y: 20, 
            opacity: 0, 
            duration: 0.6, 
            stagger: 0.15,
            ease: "back.out(1.5)"
        }, "-=0.4")
        .from('.hero-img-section', {
            x: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out"
        }, "-=1.2");
        
        // Floating Background Elements Animation
        gsap.to('.floating-shape', {
            y: "random(-20, 20)",
            x: "random(-20, 20)",
            rotation: "random(-15, 15)",
            duration: "random(3, 5)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.2
        });

    }, { scope: containerRef });

    // 3D Parallax Mouse Move Effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!imgSectionRef.current) return;
            
            const { innerWidth, innerHeight } = window;
            const xPos = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
            const yPos = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1

            // Move the glow, image, and shapes slightly based on mouse
            gsap.to('.hero-colorful-glow', {
                x: xPos * -30,
                y: yPos * -30,
                duration: 1,
                ease: "power2.out"
            });
            
            gsap.to('.hero-profile-img', {
                x: xPos * 20,
                y: yPos * 20,
                rotationY: xPos * 10,
                rotationX: yPos * -10,
                duration: 1,
                ease: "power2.out"
            });

            gsap.to('.shape-1', { x: xPos * 40, y: yPos * 40, duration: 1.5 });
            gsap.to('.shape-2', { x: xPos * -20, y: yPos * -30, duration: 1.5 });
            gsap.to('.shape-3', { x: xPos * 30, y: yPos * -20, duration: 1.5 });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className='hero-container' id='hero' ref={containerRef}>
            <Scene />
            
            {/* Animated Background Geometric Shapes */}
            <div className="bg-shapes">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
            </div>

            <div className='hero-content container'>
                {/* Left side text content */}
                <div className='hero-text-content'>
                    <h1 className='hero-title'>
                        Razil K P,<br/>
                        <span className='gradient-text'>Full Stack</span> Developer
                    </h1>
                    <p className='hero-desc'>
                        <b>MERN & WordPress Expert.</b><br/>
                        Building scalable web applications with React, Node.js, and WordPress. 
                        Passionate about creating robust, user-centric solutions that tackle challenges 
                        and deliver engaging digital experiences.
                    </p>
                    <div className='hero-btns'>
                        <a href='#projects' className='hero-btn primary-btn'>
                            <span className='btn-text'>Explore My Work</span>
                            <div className='btn-glow'></div>
                        </a>
                        <a href='#contact' className='hero-btn outline-btn'>
                            <span className='btn-text'>Get in Touch</span>
                        </a>
                    </div>
                </div>

                {/* Right side image with glow & 3D Parallax */}
                <div className='hero-img-section' ref={imgSectionRef} style={{ perspective: "1000px" }}>
                    <div className='hero-colorful-glow'></div>
                    <img src={profileImg} alt="Razil K P" className='hero-profile-img' />
                </div>
            </div>
        </div>
    );
};

export default Hero;
