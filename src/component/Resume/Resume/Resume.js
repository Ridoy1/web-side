import React from 'react';
import Experience from '../../Experience/Experience';
import Footer from '../../Share/Footer/Footer';
import Bar from '../../Share/Navbar/Bar';
import Skills from '../../Skills/Skills';
import ResumeHeader from '../ResumeHeader/ResumeHeader';

const Resume = () => {
    return (
        <div>
            <Bar/>
            <ResumeHeader/>
            <Skills/>
            <Experience/>
            <br/>
            <br/>
            <Footer/>
        </div>
    );
};

export default Resume;