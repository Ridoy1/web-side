import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDetails = ({project}) => {
    return (
        <div className="col-md-4 col-sm-6 d-flex justify-content-center">
            <div class="card" style={{width: '18rem'}}>
                <img src={project.img} class="card-img-top" alt="..."/>
                <div class="card-body text-center">
                    <h5 class="card-title">{project.name}</h5>
                    <p class="card-text">{project.details}</p>
                    <Link href={project.url} target='_blank'><button class="btn btn-primary">Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;