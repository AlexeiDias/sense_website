import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './SecondaryNavbar.css';
import CustomModal from './CustomModal'; // Import CustomModal

const SecondaryNavbar = () => {
  return (
    <Navbar expand="lg" className="secondary-navbar sticky-top">
      <Nav className="mx-auto">
      
        {/* Services Dropdown */}
        <NavDropdown title="Services" id="nav-dropdown-services" className="nav-text-item">
          <a className="dropdown-item" href="#real-state">Real State</a>
          <a className="dropdown-item" href="#business">Business???</a>
          <a className="dropdown-item" href="#people">People</a>
        </NavDropdown>

        {/* Pricing Dropdown */}
        <NavDropdown title="Pricing" id="nav-dropdown-pricing" className="nav-text-item">
          <a className="dropdown-item" href="#residential-real-state">Residential Real State</a>
          <a className="dropdown-item" href="#commercial-real-state">Commercial Real State</a>
          <a className="dropdown-item" href="#business-pricing">Business</a>
          <a className="dropdown-item" href="#people-pricing">People</a>
        </NavDropdown>

        <Nav.Link href="tel:4157059104" className="nav-text-item"> 
          <i className="bi bi-phone-vibrate-fill"></i> (415)4059104
        </Nav.Link>
        <Nav.Link href="mailto:tataborba@hotmail.com" className="nav-text-item">
          <i className="bi bi-envelope-fill"></i> tataborba@hotmail.com
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

        {/* Replace the Contact Form link with CustomModal component */}
        <CustomModal />
      </Nav>
    </Navbar>
  );
};

export default SecondaryNavbar;
