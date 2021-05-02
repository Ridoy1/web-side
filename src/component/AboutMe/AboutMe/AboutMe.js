import React from 'react';
import About from '../../About/About';
import Experience from '../../Experience/Experience';
import Footer from '../../Share/Footer/Footer';
import Bar from '../../Share/Navbar/Bar';
import Skills from '../../Skills/Skills';
import AboutHeader from '../AboutHeader/AboutHeader';

const AboutMe = () => {
    return (
        <div>
            <Bar/>
            <AboutHeader/>
            <About/>
            <Skills/>
            <Experience/>
            <br/>
            <br/>
            <Footer/>
        </div>
    );
};

export default AboutMe;