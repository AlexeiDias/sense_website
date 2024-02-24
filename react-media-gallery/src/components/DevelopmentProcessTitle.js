import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles.css';



const DevProcTitle = () => {
  return (
    <Container className='titleContainer container-margin-top-bottom' >
      <Row className="align-items-center">
      <Col className='container' md={6}>
      <h2 className="text-center mb-4 titleColor">Development Process</h2>
      
            
        </Col> 
     
       
      </Row>
    </Container>
    
      );
    };
    
    export default DevProcTitle;