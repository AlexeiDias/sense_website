import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';

const NavTop = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Virtual Sense</a>
    
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      
      <span class="navbar-text">
      Designed and built with all the love in the world by the Virtual Sense team.
      </span>
    </div>
  </div>
</nav>
    );
  };
  
  export default NavTop;