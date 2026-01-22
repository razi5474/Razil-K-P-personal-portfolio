import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className='about-section' id='about'>
            <div className='container'>
                <h2 className='section-title'>About Me</h2>
                <div className='about-content'>
                    <p>
                        I am a B.Com General graduate transitioning into web development with a strong focus on building practical, real-world skills.
                        I am actively learning and working with JavaScript, React, Node.js, and MongoDB, and I enjoy turning ideas into functional web applications.
                    </p>
                    <p>
                        My learning approach is curiosity-driven and hands-on. Instead of limiting myself to theory, I focus on building projects that strengthen
                        my understanding of frontend and backend development, problem-solving, and clean code practices. I am particularly interested in frontend
                        development, while also building a solid foundation in backend technologies.
                    </p>
                    <p>
                        Currently, I am preparing for entry-level roles as a web developer, frontend developer, or backend developer, where I can contribute,
                        learn from experienced teams, and grow as a developer. I value consistency, adaptability, and continuous improvement, and I am committed
                        to developing reliable and user-focused web solutions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
