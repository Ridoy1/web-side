import { Nav, Navbar } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const Bar = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand className="ml-5" to="/home">Hridoy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-5 pr-5">
            <Nav.Link className="mr-5"> <Link className="text-dark" to="/">Home</Link></Nav.Link>
            <Nav.Link className="mr-5"> <Link className="text-dark" to="/about">About</Link></Nav.Link>
            <Nav.Link className="mr-5"> <Link className="text-dark" to="/resume">Resume</Link></Nav.Link>
            <Nav.Link className="mr-5"> <Link className="text-dark" to="/project">Project</Link></Nav.Link>
            <Nav.Link className="mr-5"> <Link className="text-dark" to="/service">Service</Link></Nav.Link>
            <Nav.Link className="mr-5"> <Link className="text-dark" to="/contact">Contact</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default Bar;