import React from 'react';

const Skills = () => {
    return (
        <div className="container">
            <h1 className="pt-5 pb-3" style={{color: '#3e64ff'}}>Skills</h1>
            <div className="row d-flex">
                <div className="col-md-6 col-lg-6">
                    <p>HTML5</p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">95%</div>
                    </div>
                    <br/>
                    <p>CSS3</p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">95%</div>
                    </div>
                    <br/>
                    <p>Javascript</p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                    </div>
                    <br/>
                    <p>SQL</p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                    </div>
                    <br/>
                    <p>C++</p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-6">
                    <p>React</p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                    </div>
                    <br/>
                    <p>Node.js</p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                    </div>
                    <br/>
                    <p>MongoDB</p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                    </div>
                    <br/>
                    <p>Firebase</p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                    </div>
                    <br/>
                    <p>ES6</p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;