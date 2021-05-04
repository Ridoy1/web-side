import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const ContactMeHeader = () => {
    return (
        <div className="text-white" style={{backgroundColor: "#8490ff"}}>
            <h1 className="text-center pt-5">Contact</h1>
            <div className="d-flex justify-content-center align-items-center pb-5">
                <Link className="text-white" to="/">Home</Link>
                <h5 className="pt-2 pr-3 pl-3"><FontAwesomeIcon icon={faLongArrowAltRight} /></h5>
                <Link className="text-white" to="/contact">Contact</Link>
            </div>
        </div>
    );
};

export default ContactMeHeader;