import React from 'react';
import Message from '../../Message/Message';
import Footer from '../../Share/Footer/Footer';
import Bar from '../../Share/Navbar/Bar';
import ContactMeHeader from '../ContactMeHeader/ContactMeHeader';

const ContactMe = () => {
    return (
        <div>
            <Bar/>
            <ContactMeHeader/>
            <Message/>
            <Footer/>
        </div>
    );
};

export default ContactMe;