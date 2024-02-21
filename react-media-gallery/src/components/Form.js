import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Form = () => {
  return (
    <Container >
        <Row className="align-items-center">
            <Col className='container' md={6}>
            <h2 className="text-center mb-4 title">Contact Form</h2>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScJiZninW-0HAY4fW7vJVHCr4NjhJ1oEyFFTXlSthzm-fEm7g/viewform?embedded=true" 
            width="640" 
            height="1188" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0">Loading…</iframe>
            </Col> 
        </Row>
    </Container>
    
      );
    };
    
    export default Form;