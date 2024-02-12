import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const BusinessPricingTitle = () => {
  return (
    <Container >
        <Row className="align-items-center">
            <Col className='container' md={6}>
                <h2 className="text-center mb-4 title">Business Space Pricing</h2>
            </Col> 
        </Row>
    </Container>
    
      );
    };
    
    export default BusinessPricingTitle;