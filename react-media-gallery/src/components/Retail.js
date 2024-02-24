import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Hospitality.css'


const Retail = () => {
  return (
    <Container className='container-margin-top-bottom' id='retail'>
      <Row className="align-items-center">
      <Col className='container text-center' md={6}>
        <h1><i class="bi bi-shop-window iconColor"></i></h1>
          <h2 className='titleColor'>Retail</h2>
          <p>Enabling customers to navigate through virtual stores, view products in 3D, and make purchases, transforming the online shopping experience.</p>
        </Col>
        <Col md={6}>
          <iframe 
            width="100%" 
            height="400" 
            src="https://my.matterport.com/show/?m=JVuiBtyUPoW&title=0&f=0&play=0&qs=0&brand=0&dh=1&gt=0&hr=0&vr=0&pin=0" 
            frameborder="0" 
            allowfullscreen 
            allow="xr-spatial-tracking">
          </iframe>
        </Col>
       
      </Row>
    </Container>
  );
};

export default Retail;
