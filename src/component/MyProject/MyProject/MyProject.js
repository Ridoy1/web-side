import React from 'react';
import Project from '../../Project/Project';
import Footer from '../../Share/Footer/Footer';
import Bar from '../../Share/Navbar/Bar';
import MyProjectHeader from '../MyProjectHeader/MyProjectHeader';

const MyProject = () => {
    return (
        <div>
            <Bar/>
            <MyProjectHeader/>
            <Project/>
            <Footer/>
        </div>
    );
};

export default MyProject;