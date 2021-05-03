import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faGoogle,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="d-flex justify-content-center pt-5">
                <h5 className="mr-3"><a href="https://www.facebook.com/profile.php?id=100016412799725"><FontAwesomeIcon icon={faFacebookF} /></a></h5>
                <h5 className="mr-3"><a href="https://www.google.com/"><FontAwesomeIcon icon={faGoogle} /></a></h5>
                <h5 className="mr-3"><a href="https://www.linkedin.com/in/hridoy-karmakar-4113b8184/"><FontAwesomeIcon icon={faLinkedinIn} /></a></h5>
            </div>
            <div className="text-center text-white p-3">
                <p>Hridoy karmakar © {(new Date()).getFullYear()}, All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;