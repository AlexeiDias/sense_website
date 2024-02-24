import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles.css';



const IndustriesIntro = () => {
  return (
    <Container className='container media-container container-margin-top-bottom' id='introduction' >
      <Row className="align-items-center">
        
        <Col className='container' md={6}>
          <h1 className='titleColor text-center mb-4 '>INDUSTRIES</h1>   
<p>
          Virtual tour technology can be incredibly useful across <span style={{fontWeight: 'bold', fontSize: '20px'}}>various industries</span> to enhance customer engagement, offer <span style={{fontWeight: 'bold', fontSize: '20px'}}>immersive experiences</span>, and improve service delivery. Here are some examples:
</p>
            
        </Col>
      </Row>
    </Container>
  );
};

export default IndustriesIntro;
