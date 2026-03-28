import React, { useRef } from 'react';
import { FaExternalLinkAlt, FaWordpress } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './WordPressProjects.css';

// Importing WordPress project screenshots
import copacabanaImg from '../../assets/wordpress-projects/copacabana.png';
import adBusinessmenImg from '../../assets/wordpress-projects/adbusinessmen.png';
import inspireImg from '../../assets/wordpress-projects/inspirebusinesss.png';
import aayurdhwaniImg from '../../assets/wordpress-projects/aayurdhwani.png';
import kripaImg from '../../assets/wordpress-projects/kripaassosiates.png';
import spinfinityImg from '../../assets/wordpress-projects/spinfinity.png';

gsap.registerPlugin(ScrollTrigger);

const WordPressProjects = () => {
    const sectionRef = useRef();

    const wpProjects = [
        {
            title: "Copacabana Travel",
            url: "https://copacabanatravel.ae/",
            image: copacabanaImg,
            desc: "A premium travel and tourism website built with WordPress, featuring elegant layouts and booking integrations."
        },
        {
            title: "AD Businessmen",
            url: "https://adbusinessmen.com/",
            image: adBusinessmenImg,
            desc: "A professional corporate portal for business services in the UAE, showcasing service expertise."
        },
        {
            title: "Inspire Business",
            url: "https://inspirebusiness.ae/",
            image: inspireImg,
            desc: "Strategic business consultancy website focusing on clarity, corporate identity, and user lead generation."
        },
        {
            title: "Aayurdhwani",
            url: "https://aayurdhwani.com/",
            image: aayurdhwaniImg,
            desc: "An Ayurvedic wellness platform dedicated to traditional healing practices with a modern digital presence."
        },
        {
            title: "Kripa Associates",
            url: "https://kirpaassociates.com/",
            image: kripaImg,
            desc: "Professional architectural and engineering services showcase with a portfolio-driven design."
        },
        {
            title: "Spinfinity",
            url: "https://spinfinity.ae/",
            image: spinfinityImg,
            desc: "Dynamic digital solutions platform designed for high performance and modern aesthetics."
        }
    ];

    useGSAP(() => {
        // Ensure they are visible if GSAP fails (Safety First)
        gsap.set(['.wp-section-header', '.wp-card'], { opacity: 1, visibility: 'visible', scale: 1 });

        // Heading animation
        gsap.from('.wp-section-header', {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            }
        });

        // Cards staggered animation
        gsap.from('.wp-card', {
            y: 40,
            scale: 0.9,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse",
            }
        });

        ScrollTrigger.refresh();
    }, { scope: sectionRef });

    return (
        <section className='wp-projects-section' id='wordpress' ref={sectionRef}>
            <div className='container'>
                <div className='wp-section-header'>
                    <div className='wp-badge'>
                        <FaWordpress className='wp-icon' /> 
                        <span>WordPress Expert</span>
                    </div>
                    <h2 className='section-title'>WordPress Showcase</h2>
                    <p className='section-subtitle'>Premium CMS solutions crafted for reliability and impact.</p>
                </div>

                <div className='wp-grid'>
                    {wpProjects.map((project, index) => (
                        <div key={index} className='wp-card glass'>
                            <div className='wp-image-wrapper'>
                                <img src={project.image} alt={project.title} className='wp-img' />
                                <div className='wp-overlay'>
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className='wp-link-btn'>
                                        Visit Site <FaExternalLinkAlt size={14} />
                                    </a>
                                </div>
                            </div>
                            <div className='wp-info'>
                                <h3 className='wp-card-title'>{project.title}</h3>
                                <p className='wp-card-desc'>{project.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Background elements for extra attraction */}
            <div className="wp-bg-glow"></div>
        </section>
    );
};

export default WordPressProjects;
