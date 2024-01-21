import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Row className="w-100 align-items-center">
          <Col className="d-flex justify-content-center">
            <Navbar.Brand href="#home">
              <img
                src="/logo2.png"
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="Your Brand Logo"
              />
              {' '}Virtual Sense
            </Navbar.Brand>
          </Col>
          <Col className="d-flex justify-content-center">
            <div className="navbar-text">Your single line of text here</div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
