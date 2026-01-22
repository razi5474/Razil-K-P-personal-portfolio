import React, { useRef, useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            });
    };

    return (
        <section className='contact-section' id='contact'>
            <div className='container'>
                <h2 className='section-title'>Contact Me</h2>

                <div className='contact-wrapper'>
                    <div className='contact-info'>
                        <h3 className='contact-subtitle'>Let's Connect</h3>
                        <p className='contact-text'>
                            I'm currently looking for new opportunities as a Full Stack Developer.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className='contact-methods'>
                            <a href="mailto:rasrasil69@gmail.com" className='contact-card'>
                                <FaEnvelope className='contact-icon' />
                                <div className='contact-detail'>
                                    <h4>Email</h4>
                                    <p>rasrasil69@gmail.com</p>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/razil-kp/" target="_blank" rel="noopener noreferrer" className='contact-card'>
                                <FaLinkedin className='contact-icon' />
                                <div className='contact-detail'>
                                    <h4>LinkedIn</h4>
                                    <p>Check my profile</p>
                                </div>
                            </a>

                            <a href="https://github.com/razi5474" target="_blank" rel="noopener noreferrer" className='contact-card'>
                                <FaGithub className='contact-icon' />
                                <div className='contact-detail'>
                                    <h4>GitHub</h4>
                                    <p>Check my code</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <form className='contact-form' onSubmit={sendEmail}>
                        <div className='form-group'>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="user_name" placeholder="Your Name" required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="user_email" placeholder="Your Email" required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                        </div>

                        <button type="submit" className={`btn btn-primary submit-btn ${status}`} disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'success' && <p className="status-msg success">Message sent successfully!</p>}
                        {status === 'error' && <p className="status-msg error">Failed to send message. Please try again.</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
