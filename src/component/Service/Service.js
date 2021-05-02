import React from 'react';
import webdesign from '../../image/web-design.png';
import developer from '../../image/coding.png';
import graphic from '../../image/illustration.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Web Design',
        img: webdesign,
        details: 'We specialize in web design services.'
    },
    {
        name: 'Web Development',
        img: developer,
        details: 'We specialize in Web Development services.'
    },
    {
        name: 'Graphic Design',
        img: graphic,
        details: 'We specialize in Graphic Design services.'
    }
]

const Service = () => {
    return (
        <section className="mt-5">
            <div className="text-center">
                <h1>My Offered Services</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row container mt-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;