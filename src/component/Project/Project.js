import React from 'react';
import beauty from '../../image/beauty.PNG';
import food from '../../image/food.PNG';
import player from '../../image/player.PNG';
import ProjectDetails from '../ProjectDetails.js/ProjectDetails';

const projectData = [
    {
        name: 'Beauty center',
        img: beauty,
        details: 'Beauty center service .'
    },
    {
        name: 'Food item',
        img: food,
        details: 'Food item list.'
    },
    {
        name: 'Player',
        img: player,
        details: 'player list and selected player list.'
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