import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import './NavTop.css';
const NavTop = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Virtual Sense</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Industries
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#">Introduction</a></li>
            <li><a class="dropdown-item" href="#">Real State</a></li>
            <li><a class="dropdown-item" href="#">Retail</a></li>
            <li><a class="dropdown-item" href="#">Museums and Galleries</a></li>
            <li><a class="dropdown-item" href="#">Hospitality</a></li>
            <li><a class="dropdown-item" href="#">Event Venues</a></li>
            <li><a class="dropdown-item" href="#">Tourism</a></li>
            <li><a class="dropdown-item" href="#">Fitness and Spa</a></li>
            <li><a class="dropdown-item" href="#">Automotive Showrooms</a></li>
            <li><a class="dropdown-item" href="#">Construction and Architecture</a></li>
            <li><a class="dropdown-item" href="#">Education</a></li>
            <li><a class="dropdown-item" href="#">People Scanning</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Check it out
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#">What we Do</a></li>
            <li><a class="dropdown-item" href="#">How it works</a></li>
            <li><a class="dropdown-item" href="#">Essential Features</a></li>
            <li><a class="dropdown-item" href="#">Individual Services Pricing</a></li>
            <li><a class="dropdown-item" href="#">Customers testemonies</a></li>
            <li><a class="dropdown-item" href="#">About Us</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Contact Us
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="tel:4157059104"><i className="bi bi-phone-vibrate-fill"></i> 4157059104</a></li>
            <li><a class="dropdown-item" href="mailto:tataborba@hotmail.com"><i className="bi bi-envelope-fill"></i> tataborba@hotmail.com</a></li>
            <li><a class="dropdown-item" href="https://www.facebook.com"><i className="bi bi-facebook"></i></a></li>
            <li><a class="dropdown-item" href="https://www.instagram.com"><i className="bi bi-instagram"></i></a></li>
            <li><a class="dropdown-item" href="https://www.youtube.com"><i className="bi bi-youtube"></i></a></li>
            
          </ul>
        </li>
      </ul>
      <span class="navbar-text">
      Exploring spaces through the wonders of technology.
      </span>
    </div>
  </div>
</nav>
    );
  };
  
  export default NavTop;