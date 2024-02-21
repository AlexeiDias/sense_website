import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const VirtualStoreTitle = () => {
  return (
    <Container >
        <Row className="align-items-center">
        <Col md={4} className="text-center">
        <h1><i class="bi bi-shop-window title"></i></h1>
          <h3>Retail</h3>
          <p>Enabling customers to navigate through virtual stores, view products in 3D, and make purchases, transforming the online shopping experience.</p>
        </Col>
            <Col className='container' md={6}>
                <h2 className="text-center mb-4 title">Virtual Store</h2>
            </Col> 
        </Row>
    </Container>
    
      );
    };
    
    export default VirtualStoreTitle;