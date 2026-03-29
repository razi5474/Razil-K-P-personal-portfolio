import React, { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Projects.css';

// Importing real project screenshots from assets
import razkartImg from '../../assets/Razkart-ecom.png';
import budgetImg from '../../assets/budget-tracker.png';
import taskManagerImg from '../../assets/task-manager.png';
import calculatorImg from '../../assets/calculater.png';
import fatLossImg from '../../assets/fat-loss.png';
import airJordanImg from '../../assets/air-jordan.png';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef();

    const projectList = [
        {
            title: "Air Jordan 1 Animation",
            desc: "A premium product reveal experience with immersive scrollytelling, synchronized GSAP animations, and cinematic scroll-linked effects.",
            tech: ["Next.js", "GSAP", "Tailwind CSS", "Canvas"],
            github: "https://github.com/razi5474/air-Jordan-animation-website",
            demo: "https://air-jordan-animation-website.vercel.app/",
            image: airJordanImg,
            featured: true
        },
        {
            title: "Razkart E-commerce",
            desc: "A high-performance full-stack e-commerce solution featuring secure Stripe payments, a robust admin dashboard, and real-time order tracking.",
            tech: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
            github: "https://github.com/razi5474",
            demo: "https://e-commerce-final-project-frontend-raz.netlify.app/",
            image: razkartImg,
            featured: true
        },
        {
            title: "Task Manager (MERN)",
            desc: "Full-stack project management tool with JWT auth, task tracking, and category control.",
            tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"],
            github: "https://github.com/razi5474/Task-manager",
            demo: "https://razis-task-manager.netlify.app",
            image: taskManagerImg,
            featured: true
        },
        {
            title: "Budget Tracker",
            desc: "MERN application for personal asset management with visual analytics and category control.",
            tech: ["MongoDB", "Express", "React", "Node.js"],
            github: "https://github.com/razi5474",
            demo: "https://raz-budget-tracker.netlify.app/",
            image: budgetImg,
            featured: false
        },
        {
            title: "Premium Calculator",
            desc: "A sleek, responsive calculator app with modern UI and advanced mathematical operations.",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/razi5474/calculator",
            demo: "https://calculator-blond-ten-28.vercel.app/",
            image: calculatorImg,
            featured: false
        },
        {
            title: "Fat Loss Diet Plan",
            desc: "Comprehensive diet planning tool with personalized meal recommendations and calorie tracking.",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/razi5474/fat-loss-diet-plan",
            demo: "https://fat-loss-diet-plan.vercel.app/",
            image: fatLossImg,
            featured: false
        }
    ];

    useGSAP(() => {
        // Ensure they are visible if GSAP fails for some reason
        gsap.set('.project-card', { opacity: 1, visibility: 'visible' });
        
        gsap.from('.project-card', {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
                // Refresh ScrollTrigger when this component's triggers are set
            }
        });
        
        ScrollTrigger.refresh();
    }, { scope: sectionRef });

    return (
        <section className='projects-section' id='projects' ref={sectionRef}>
            <div className='container'>
                <h2 className='section-title'>Featured Projects</h2>
                <div className='projects-grid'>
                    {projectList.map((project, index) => (
                        <div key={index} className='project-card glass shadow-lg'>
                            <div className='project-image-container'>
                                <img src={project.image} alt={project.title} className='project-image' />
                                {project.featured && <span className='featured-badge'>Featured</span>}
                                <div className='project-overlay'>
                                    <div className='project-links'>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className='overlay-link'>
                                            <FaGithub size={24} />
                                        </a>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className='overlay-link'>
                                            <FaExternalLinkAlt size={22} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='project-content'>
                                <div className='project-tech'>
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className='tech-tag'>{tech}</span>
                                    ))}
                                </div>
                                <h3 className='project-title'>{project.title}</h3>
                                <p className='project-desc'>{project.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
