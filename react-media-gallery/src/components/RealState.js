import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles.css'

const RealState = () => {
  return (
    <Container className='container-margin-top-bottom' id='real'>
      <Row className="align-items-center">
        
      <Col md={6}>
          <iframe 
            width="100%" 
            height="400" 
            src="https://my.matterport.com/show/?m=zYzoTXMyCKH" 
            frameborder="0" 
            allowfullscreen 
            allow="xr-spatial-tracking">
          </iframe>
        </Col>
        <Col className='container text-center' md={6}>
        <h1><i class="bi bi-house-heart-fill iconColor"></i></h1>
          <h2 className='titleColor'>Real Estate</h2>
      <p>Virtual tours in the real estate industry <span style={{fontWeight: 'bold', fontSize: '20px'}}>revolutionize</span> how <span style={{fontWeight: 'bold', fontSize: '20px'}}>properties</span> are marketed and <span style={{fontWeight: 'bold', fontSize: '20px'}}>sold</span>, offering distinctive <span style={{fontWeight: 'bold', fontSize: '20px'}}>advantages</span> for both realtors and <span style={{fontWeight: 'bold', fontSize: '20px'}}>potential buyers</span>.
</p>
            
        </Col>
      </Row>
    </Container>
  );
};

export default RealState;
