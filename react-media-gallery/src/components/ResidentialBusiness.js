import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ResidentialBusiness.css'

const ResidentialBusiness = () => {
  return (
    <Container >
      <Row className="align-items-center">
      <Col className='container' md={6}>
      <h2 className="text-center mb-4 title">Residential and Business Real State</h2>
      
            
        </Col> 
      <Col md={6}>
          <iframe 
            width="100%" 
            height="400" 
            src="https://my.matterport.com/show/?m=nFXjkP6meiR" 
            frameborder="0" 
            allowfullscreen 
            allow="xr-spatial-tracking">
          </iframe>
        </Col>
       
      </Row>
    </Container>
    
      );
    };
    
    export default ResidentialBusiness;