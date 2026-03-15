import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
            }
        });

        tl.from('.about-heading-wrapper', {
            y: 30,
            opacity: 0,
            duration: 0.8
        })
        .from('.about-card', {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        }, "-=0.4");
    }, { scope: sectionRef });

    return (
        <section className='about-section' id='about' ref={sectionRef}>
            <div className='container'>
                <div className="about-heading-wrapper">
                    <h2 className='section-title'>About Me</h2>
                </div>
                <div className='about-grid'>
                    <div className='about-card main-card'>
                        <div className="card-icon"><FaGraduationCap /></div>
                        <h3>The Journey</h3>
                        <p>
                            I am a B.Com General graduate transitioning into web development with a strong focus on building practical, real-world skills.
                            I am actively learning and working with <strong>JavaScript, React, Node.js, and MongoDB</strong>, and I enjoy turning ideas into functional web applications.
                        </p>
                    </div>
                    <div className='about-card'>
                        <div className="card-icon"><FaCode /></div>
                        <h3>My Approach</h3>
                        <p>
                            My learning approach is curiosity-driven and hands-on. Instead of limiting myself to theory, I focus on building projects that strengthen
                            my understanding of frontend and backend development, problem-solving, and clean code practices.
                        </p>
                    </div>
                    <div className='about-card'>
                        <div className="card-icon"><FaLaptopCode /></div>
                        <h3>My Goal</h3>
                        <p>
                            Currently, I am preparing for entry-level roles as a developer, where I can contribute,
                            learn from experienced teams, and grow. I value consistency, adaptability, and continuous improvement.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
