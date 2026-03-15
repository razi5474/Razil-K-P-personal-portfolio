import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaWordpress, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiFirebase } from 'react-icons/si';
import Marquee from "react-fast-marquee";
import './Skills.css';

const Skills = () => {
    const allSkills = [
        { name: "React.js", icon: <FaReact color="#61DAFB" /> },
        { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
        { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
        { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
        { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
        { name: "Redux", icon: <SiRedux color="#764ABC" /> },
        { name: "WordPress", icon: <FaWordpress color="#21759B" /> },
        { name: "Git", icon: <FaGitAlt color="#F05032" /> },
        { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
    ];

    return (
        <section className='skills-section' id='skills'>
            <div className='container'>
                <h2 className='section-title'>Skills & Expertise</h2>
                <div className='skills-marquee-container'>
                    <Marquee gradient={true} gradientColor="rgba(3, 7, 18, 1)" speed={50} pauseOnHover={true}>
                        {allSkills.map((skill, index) => (
                            <div key={index} className='skill-marquee-item glass'>
                                <div className='skill-icon'>{skill.icon}</div>
                                <span className='skill-name'>{skill.name}</span>
                            </div>
                        ))}
                    </Marquee>
                    <Marquee gradient={true} gradientColor="rgba(3, 7, 18, 1)" speed={40} direction='right' pauseOnHover={true} className='mt-4'>
                        {allSkills.slice().reverse().map((skill, index) => (
                            <div key={index} className='skill-marquee-item glass'>
                                <div className='skill-icon'>{skill.icon}</div>
                                <span className='skill-name'>{skill.name}</span>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default Skills;
