import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles.css'

const ResidentialComponent = () => {
  return (
    <Container className='fontBarlow'>
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
        <Col className='container' md={6}>
     
      <p>Virtual tours in the real estate industry <span style={{fontWeight: 'bold', fontSize: '20px'}}>revolutionize</span> how <span style={{fontWeight: 'bold', fontSize: '20px'}}>properties</span> are marketed and <span style={{fontWeight: 'bold', fontSize: '20px'}}>sold</span>, offering distinctive <span style={{fontWeight: 'bold', fontSize: '20px'}}>advantages</span> for both realtors and <span style={{fontWeight: 'bold', fontSize: '20px'}}>potential buyers</span>.
</p>
            
        </Col>
      </Row>
    </Container>
  );
};

export default ResidentialComponent;
