import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projectList = [
        {
            title: "Razkart E-commerce",
            desc: "Full-stack e-commerce platform with Stripe payment integration, admin dashboard, and order tracking.",
            tech: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"],
            github: "https://github.com/razi5474", // Placeholder based on research
            demo: "https://e-commerce-final-project-frontend-raz.netlify.app/"
        },
        {
            title: "Budget Expense Tracker",
            desc: "MERN stack application for tracking personal finances with visual analytics and category management.",
            tech: ["MongoDB", "Express", "React", "Node.js"],
            github: "https://github.com/razi5474",
            demo: "https://raz-budget-tracker.netlify.app/"
        }

    ];

    return (
        <section className='projects-section' id='projects'>
            <div className='container'>
                <h2 className='section-title'>Featured Projects</h2>
                <div className='projects-grid'>
                    {projectList.map((project, index) => (
                        <div key={index} className='project-card'>
                            <div className='project-content'>
                                <h3 className='project-title'>{project.title}</h3>
                                <p className='project-desc'>{project.desc}</p>
                                <div className='project-tech'>
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className='tech-tag'>{tech}</span>
                                    ))}
                                </div>
                                <div className='project-links'>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className='link-btn'>
                                        <FaGithub /> Code
                                    </a>
                                    <a href={project.demo} className='link-btn demo-btn'>
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
