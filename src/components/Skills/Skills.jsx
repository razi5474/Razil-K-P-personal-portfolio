import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaWordpress, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const categories = [
        {
            title: "Frontend",
            skills: [
                { name: "React.js", icon: <FaReact size={40} color="#61DAFB" /> },
                { name: "HTML5", icon: <FaHtml5 size={40} color="#E34F26" /> },
                { name: "CSS3", icon: <FaCss3Alt size={40} color="#1572B6" /> },
                { name: "JavaScript", icon: <FaJs size={40} color="#F7DF1E" /> },
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", icon: <FaNodeJs size={40} color="#339933" /> },
                { name: "Express.js", icon: <SiExpress size={40} color="#000000" className="icon-white" /> },
                { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
            ]
        },
        {
            title: "CMS & Tools",
            skills: [
                { name: "WordPress", icon: <FaWordpress size={40} color="#21759B" /> },
                { name: "Git", icon: <FaGitAlt size={40} color="#F05032" /> },
                { name: "GitHub", icon: <FaGithub size={40} color="#ffffff" /> },
            ]
        }
    ];

    return (
        <section className='skills-section' id='skills'>
            <div className='container'>
                <h2 className='section-title'>Skills & Expertise</h2>
                <div className='skills-grid'>
                    {categories.map((cat, idx) => (
                        <div key={idx} className='skills-category'>
                            <h3 className='category-title'>{cat.title}</h3>
                            <div className='skills-list'>
                                {cat.skills.map((skill, index) => (
                                    <div key={index} className='skill-card'>
                                        <div className='skill-icon'>{skill.icon}</div>
                                        <p className='skill-name'>{skill.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
