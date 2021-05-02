import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <section className="container pt-0" style={{height: '350px'}}>
            <div className="overlay"></div>
            <div>
                <h5 className="text-center pt-5" style={{color: '#3e64ff'}}>HEY! I AM</h5>
                <h1 className="text-center">Hridoy karmakar</h1>
                <h2 className="text-center" >I'm a <span style={{color: '#3e64ff'}}>Developer</span></h2>
                
            </div>
        </section>
    );
};

export default Header;