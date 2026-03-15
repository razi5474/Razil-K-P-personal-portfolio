import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FaCode, FaWordpress, FaMobileAlt } from 'react-icons/fa';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const sectionRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
            }
        });

        tl.from('.services-header', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
        .from('.service-card', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        }, "-=0.4");
        
    }, { scope: sectionRef });

    const services = [
        {
            title: "MERN Stack Development",
            desc: "Building dynamic, single-page applications using MongoDB, Express, React, and Node.js. Scalable and efficient full-stack solutions.",
            icon: <FaCode size={40} className="icon-gradient" />
        },
        {
            title: "WordPress Development",
            desc: "Custom theme development, plugin integration, and performance optimization. Creating manageable content sites tailored to your needs.",
            icon: <FaWordpress size={40} className="icon-gradient" />
        },
        {
            title: "Responsive Web Design",
            desc: "Creating visually appealing and mobile-friendly websites that look great on any device, ensuring the best user experience.",
            icon: <FaMobileAlt size={40} className="icon-gradient" />
        }
    ];

    return (
        <section className='services-section' id='services' ref={sectionRef}>
            <div className='services-bg-glow'></div>
            <div className='container'>
                <div className="services-header">
                    <h2 className='section-title'>My Services</h2>
                    <p className='section-subtitle'>What I bring to the table</p>
                </div>
                
                <div className='services-grid'>
                    {services.map((service, index) => (
                        <div key={index} className='service-card group'>
                            <div className='service-icon-wrapper'>
                                {service.icon}
                            </div>
                            <h3 className='service-title'>{service.title}</h3>
                            <p className='service-desc'>{service.desc}</p>
                            
                            {/* Decorative elements for premium feel */}
                            <div className="card-border-gradient"></div>
                            <div className="card-glow"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
