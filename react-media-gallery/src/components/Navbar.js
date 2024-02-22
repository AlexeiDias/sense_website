import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import './Styles.css';
import './Navbar.css';

const CustomNavbar = () => {
  return (
    <nav class="navbar bg-dark">
      <div className='container-fluid align-items-center'>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="brand-section">
            <Navbar.Brand href="#home">
              <span className="brand-text">Virtual Sense</span>
            </Navbar.Brand>
          </Col>
          <Col xs={12} md={6} className="navbar-text">
           <h4>Exploring spaces through the wonders of technology.</h4> 
          </Col>
          </Row>
      </div>
      </nav>
  );
};

export default CustomNavbar;

 
