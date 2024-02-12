import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutUsText.css';


const AboutUs = () => {
  return (
    <Container className='AboutUsText'>
      <Row className="align-items-center">
        <Col md={6}>
          <img
            width="100%" 
            height="100%" 
            src="/AboutUsText.png" 
           
            >
          </img>
        </Col>
        <Col className='about-us-text'  md={6}>
          <h2 className='title'>WHAT WE DO</h2>   
          <p>At Virtual Sense, we transcend the boundaries of space by crafting state-of-the-art <span style={{fontWeight: 'bold', fontSize: '20px'}}>3D immersive virtual tours</span>. Since our inception in 2018, we've been pioneering <span style={{fontWeight: 'bold', fontSize: '20px'}}>virtual exploration</span>, empowering real estate businesses, tourism, and event venues with the ability to showcase their spaces like never before. Our <span style={{fontWeight: 'bold', fontSize: '20px'}}>commitment</span> lies in delivering an unparalleled <span style={{fontWeight: 'bold', fontSize: '20px'}}>virtual presence</span> that captures the essence and ambiance of physical locations.

With a footprint both in the US and internationally, we pride ourselves on broadening horizons and unlocking potential across the globe. 

<span style={{fontWeight: 'bold', fontSize: '20px'}}>Join us at Virtual Sense</span>, where your next journey is just a click away – no passport required.

</p>
            
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
