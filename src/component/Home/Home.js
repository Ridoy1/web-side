import React from 'react';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Footer from '../Share/Footer/Footer';
import Header from '../Header/Header';
import Message from '../Message/Message';
import Bar from '../Share/Navbar/Bar';
import Service from '../Service/Service';
import Skills from '../Skills/Skills';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div>
            <Bar/>
            <Header/>
            <About/>
            <Skills/>
            <Project/>
            <Service/>
            <Message/>
            <Footer/>
        </div>
    );
};

export default Home;