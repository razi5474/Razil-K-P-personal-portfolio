import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import SmoothScroll from './components/SmoothScroll';

function App() {
    return (
        <SmoothScroll>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Services />
                <Education />
                <Contact />
            </main>
            <Footer />
        </SmoothScroll>
    );
}

export default App;
