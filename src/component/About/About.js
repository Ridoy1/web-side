import React from 'react';
import './About.css';
import about from '../../image/20210430_192954.jpg'

const About = () => {
    return (
        <section className="container pt-0">
            <div className="row d-flex no-gutters">
                <div className="col-md-6 col-sm-3">
                    <img  className="about-img img-fluid" src={about} alt=""/>
                </div>
                <div className="col-md-6 col-sm-3 d-flex">
                    <div>
                        <h1 className="pt-5">About Me</h1>
                        <p>Hi! I am Hridoy karmakar a web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2020. I enjoy creating beautifully designed, intuitive and functional websites.</p>
                        <h4>Name: <span className="text-secondary"> Hridoy karmarkar</span></h4>
                        <h4>Address: <span className="text-secondary pt-2"> Dhaka, Bangladesh</span></h4>
                        <h4>Email: <span className="text-secondary pt-2"> hridoykarmakar883@gmail.com</span></h4>
                        <h4>Phone: <span className="text-secondary pt-2"> 01865------</span></h4>
                        <h3 className="pt-3 pb-3"><span style={{color: '#3e64ff'}}>30</span> Project complete</h3>
                        <button type="button" class="btn btn-primary rounded-pill"><a className="text-white" href="https://drive.google.com/file/d/1RPqgdgL0m09c7F_K0C0ad0dKFICk1aOP/view?usp=sharing">Download Resume</a></button>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;