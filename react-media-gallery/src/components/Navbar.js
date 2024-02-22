import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import './Navbar.css';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <div className="navContainer">
        <Row className="align-items-center">
          <Col xs={12} md={4} className="brand-section">
            <Navbar.Brand href="#home">
              <span className="brand-text">Virtual Sense</span>
            </Navbar.Brand>
          </Col>
          <Col xs={12} md={3} className="logo-section">
            <img
              src="/head.png"
              className="logo"
              alt="Your Brand Logo"
             
            />
          </Col>
          <Col xs={12} md={5} className="navbar-text">
           <p>Reviving Moments, Crafting History – Our 3D virtual tours aren't just about exploring spaces; they're about capturing life's chapters, creating a timeless virtual history to journey back through the wonders of technology.</p> 
          </Col>
          
         
        </Row>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
