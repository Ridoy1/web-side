import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faGoogle,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="d-flex container text-white pb-5 justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <h3 className="pt-5">About Me</h3>
                        <p className="pt-3">Hi! I am Hridoy karmakar a web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2020. I enjoy creating beautifully designed, intuitive and functional websites.</p>

                    </div>
                    <div className="col-md-4">
                        <h3 className="pt-5">Newsletter</h3>
                        <p className="pt-3">Stay updated with our latest trends</p>
                        <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Enter Your Gmail" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button class="btn btn-outline-primary" type="button" id="button-addon2">Button</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <h3 className="pt-5">Follow Me</h3>
                            <p className="pt-3">Let us be social</p>
                            <div className="d-flex">
                                <h5 className="mr-3"><a href="https://www.facebook.com/profile.php?id=100016412799725"><FontAwesomeIcon icon={faFacebookF} /></a></h5>
                                <h5 className="mr-3"><a href="https://www.google.com/"><FontAwesomeIcon icon={faGoogle} /></a></h5>
                                <h5 className="mr-3"><a href="https://www.linkedin.com/in/hridoy-karmakar-4113b8184/"><FontAwesomeIcon icon={faLinkedinIn} /></a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;