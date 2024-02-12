import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './SecondaryNavbar.css';

const SecondaryNavbar = () => {
  return (
    <Navbar  expand="lg" className="secondary-navbar sticky-top">
      <Nav className="mx-auto">
      
        <Nav.Link href="#services" className="nav-text-item">Services</Nav.Link>
        <Nav.Link href="#pricing" className="nav-text-item">Pricing</Nav.Link>
       
        <Nav.Link href="tel:4157059104" className="nav-text-item"> <i className="bi bi-phone-vibrate-fill"></i> (415)4059104
        </Nav.Link>
        <Nav.Link href="tel:4157059104" className="nav-text-item"><i class="bi bi-envelope-at-fill"></i> tataborba@hotmail.com
        </Nav.Link>
        <Nav.Link href="https://www.facebook.com" className="nav-icon-item">
          <i className="bi bi-facebook"></i>
        </Nav.Link>
        <Nav.Link href="https://www.instagram.com" className="nav-icon-item">
          <i className="bi bi-instagram"></i>
        </Nav.Link>
        <Nav.Link href="https://www.youtube.com" className="nav-icon-item">
          <i className="bi bi-youtube"></i>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};
export default SecondaryNavbar;