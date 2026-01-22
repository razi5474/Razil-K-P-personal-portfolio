import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCertificate } from 'react-icons/fa';
import './Education.css';

const Education = () => {
    const education = [
        {
            school: "Entri Elevate",
            degree: "Full Stack Developer (MERN)",
            year: "Sep 2024 - Nov 2025",
            desc: "Intensive bootcamp focusing on MongoDB, Express, React, and Node.js."
        },
        {
            school: "IGNOU",
            degree: "Bachelor of Commerce (B.Com)",
            year: "2023 - 2025",
            desc: "Specialized in Commerce and Finance."
        },
        {
            school: "Govt ITI Kannur",
            degree: "Turner",
            year: "2020 - 2022",
            desc: "Technical training."
        }
    ];

    const experience = [
        {
            company: "Thismychoice",
            role: "WordPress Developer",
            duration: "Mar 2024 - Oct 2025",
            type: "Remote",
            desc: "Developed and customized WordPress websites, optimized themes and plugins, improved SEO and site performance."
        },
        {
            company: "Inmakes Infotech Pvt Ltd",
            role: "Digital Marketing Intern",
            duration: "Aug 2023 - Dec 2023",
            type: "Hybrid",
            desc: "Managed digital campaigns and analyzed traffic using Google Analytics."
        },
        {
            company: "A B ENTERPRISE",
            role: "Account Executive",
            duration: "Dec 2022 - Dec 2023",
            type: "On-site",
            desc: "Managed accounts using Tally and Excel."
        }
    ];

    return (
        <section className='edu-section' id='education'>
            <div className='container'>
                <h2 className='section-title'>Experience & Education</h2>

                <div className='edu-grid'>
                    {/* Experience Column */}
                    <div className='edu-column'>
                        <h3 className='column-title'><FaBriefcase /> Experience</h3>
                        <div className='timeline'>
                            {experience.map((exp, index) => (
                                <div key={index} className='timeline-item'>
                                    <div className='timeline-dot'></div>
                                    <div className='timeline-content'>
                                        <span className='timeline-date'>{exp.duration}</span>
                                        <h4 className='timeline-role'>{exp.role}</h4>
                                        <h5 className='timeline-company'>{exp.company} <span className='type-badge'>{exp.type}</span></h5>
                                        <p className='timeline-desc'>{exp.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div className='edu-column'>
                        <h3 className='column-title'><FaGraduationCap /> Education</h3>
                        <div className='timeline'>
                            {education.map((edu, index) => (
                                <div key={index} className='timeline-item'>
                                    <div className='timeline-dot'></div>
                                    <div className='timeline-content'>
                                        <span className='timeline-date'>{edu.year}</span>
                                        <h4 className='timeline-role'>{edu.degree}</h4>
                                        <h5 className='timeline-company'>{edu.school}</h5>
                                        <p className='timeline-desc'>{edu.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
