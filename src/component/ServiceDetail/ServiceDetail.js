import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '50px'}} src={service.img} alt=""/>
            <h5 className="mb-3 mt-2">{service.name}</h5>
            <p className="text-secondary mb-5">{service.details}</p>
        </div>
    );
};

export default ServiceDetail;