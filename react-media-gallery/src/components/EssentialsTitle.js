import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles.css';



const EssentialsTitle = () => {
  return (
    <Container className='container-margin-top-bottom' id='essential-features'>
      <Row className="align-items-center">
      <Col className='container' md={6}>
      <h2 className="text-center mb-4 titleColor">Essential Features</h2>
      
            
        </Col> 
     
       
      </Row>
    </Container>
    
      );
    };
    
    export default EssentialsTitle;