import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const PeopleScanningTitle = () => {
  return (
    <Container >
        <Row className="align-items-center">
            <Col className='container' md={6}>
                <h2 className="text-center mb-4 title">People Scanning Pricing</h2>
            </Col> 
        </Row>
    </Container>
    
      );
    };
    
    export default PeopleScanningTitle;