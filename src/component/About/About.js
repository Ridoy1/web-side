import React from 'react';
import './About.css';
import about from '../../image/about1.png'

const About = () => {
    return (
        <section className="container pt-0">
            <div className="row d-flex no-gutters">
                <div className="col-md-6 col-sm-3">
                    <img  className="about-img img-fluid" src={about} alt=""/>
                </div>
                <div className="col-md-6 col-sm-3 d-flex p-4">
                    <div>
                        <h1 className="pt-5 fw-bolder pb-3">About Me</h1>
                        <p>Hi! I am Hridoy karmakar a web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2020. I enjoy creating beautifully designed, intuitive and functional websites.</p>
                        <h5 className="pb-2">Name: <span className="text-secondary"> Hridoy karmarkar</span></h5>
                        <h5 className="pb-2">Address: <span className="text-secondary pt-2"> Dhaka, Bangladesh</span></h5>
                        <h5 className="pb-2">Email: <span className="text-secondary pt-2"> hridoykarmakar883@gmail.com</span></h5>
                        <h5 className="pb-2">Phone: <span className="text-secondary pt-2"> +8801865557883</span></h5>
                        <h3 className="pt-3 pb-3"><span style={{color: '#3e64ff'}}>30</span> Project complete</h3>
                        <button type="button" class="btn btn-primary rounded-pill"><a className="text-white" href="https://drive.google.com/file/d/1gyk4s1xm4Og-itwV5dDjiJfkJAjDVKAb/view?usp=sharing">Download Resume</a></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;