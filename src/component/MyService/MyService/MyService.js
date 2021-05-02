import React from 'react';
import Service from '../../Service/Service';
import Footer from '../../Share/Footer/Footer';
import Bar from '../../Share/Navbar/Bar';
import MyServiceHeader from '../MyServiceHeader/MyServiceHeader';

const MyService = () => {
    return (
        <div>
            <Bar/>
            <MyServiceHeader/>
            <Service/>
            <Footer/>
        </div>
    );
};

export default MyService;