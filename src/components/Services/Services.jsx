import React from 'react';
import { FaCode, FaWordpress, FaMobileAlt } from 'react-icons/fa';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: "MERN Stack Development",
            desc: "Building dynamic, single-page applications using MongoDB, Express, React, and Node.js. Scalable and efficient full-stack solutions.",
            icon: <FaCode size={50} color="#61DAFB" />
        },
        {
            title: "WordPress Development",
            desc: "Custom theme development, plugin integration, and performance optimization. Creating manageable content sites tailored to your needs.",
            icon: <FaWordpress size={50} color="#21759B" />
        },
        {
            title: "Responsive Web Design",
            desc: "Creating visually appealing and mobile-friendly websites that look great on any device, ensuring the best user experience.",
            icon: <FaMobileAlt size={50} color="#E34F26" />
        }
    ];

    return (
        <section className='services-section' id='services'>
            <div className='container'>
                <h2 className='section-title'>My Services</h2>
                <div className='services-grid'>
                    {services.map((service, index) => (
                        <div key={index} className='service-card'>
                            <div className='service-icon'>{service.icon}</div>
                            <h3 className='service-title'>{service.title}</h3>
                            <p className='service-desc'>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
