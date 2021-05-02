import React from 'react';

const Experience = () => {
    return (
        <section className="container">
            <h1 className="pt-5" style={{color: '#3e64ff'}}>Experience</h1>
            <div>
                <h3 className="pt-2 pb-2" style={{color: '#3e64ff'}}>Beauty-Center (10.03.2021-14.03.2021)</h3>
                <li>Build a full-stack web application whit a dynamic service section and feedback.</li>
                <li>A client can sign in with google, order for service and can give feedback.</li>
                <li>Tools: React, Context Api, React Router, React Bootstrap, Fire-base Authentication, Express js,
                MongoDB, Heroku</li>
            </div>
            <div>
                <h3 className="pt-5 pb-2" style={{color: '#3e64ff'}}>Player list (04.04.2021-06.04.2021)</h3>
                <li>Total player list</li>
                <li>The select player in the player list</li>
                <li>Tools: React Hooks, React Bootstrap, React Router</li>
            </div>
            <div>
                <h3 className="pt-5 pb-2" style={{color: '#3e64ff'}}>Image show (29.04.2021-02.05.2021)</h3>
                <li>Select this image to add a slide show.</li>
                <li>Tools: React Hooks, React Bootstrap, JavaScript</li>
            </div>
        </section>
    );
};

export default Experience;