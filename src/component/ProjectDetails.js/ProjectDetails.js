import React from 'react';

const ProjectDetails = ({project}) => {
    return (
        <div className="col-md-4 col-sm-6 d-flex justify-content-center">
            <div class="card" style={{width: '18rem'}}>
                <img src="" class="card-img-top" alt="..."/>
                <div class="card-body text-center">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button href="#" class="btn btn-primary">Show Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;