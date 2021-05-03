import React from 'react';
import webdesign from '../../image/web-design.png';
import developer from '../../image/coding.png';
import graphic from '../../image/illustration.png';
import ProjectDetails from '../ProjectDetails.js/ProjectDetails';

const projectData = [
    {
        name: 'Web Design',
        img: webdesign,
        details: 'We specialize in web design services.'
    },
    {
        name: 'Web Development',
        img: developer,
        details: 'We specialize in Web Development services.'
    },
    {
        name: 'Graphic Design',
        img: graphic,
        details: 'We specialize in Graphic Design services.'
    }
]

const Project = () => {
    return (
        <section className="mt-5">
            <div className="text-center">
                <h1>My Project</h1>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="row mt-5">
                    {
                        projectData.map(project => <ProjectDetails project={project} key={project.name}></ProjectDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Project;