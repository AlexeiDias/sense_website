// WhatWeDo.js
import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles.css';
import createObserver from './Observer.js'; // Adjust the path as necessary

const WhatWeDo = () => {
  // Create a ref for the element you want to observe
  const mediaTextRef = useRef(null);

  useEffect(() => {
    const observer = createObserver();

    // Ensure ref is linked to an element
    if (mediaTextRef.current) {
      observer.observe(mediaTextRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (mediaTextRef.current) {
        observer.unobserve(mediaTextRef.current);
      }
    };
  }, []);

  return (
    <Container className='container media-container container-margin-top-bottom ' id='WhatWeDo'>
      <Row className="align-items-center ">
        <Col className='image-column ' md={6} >
          <img 
            width="100%" 
            height="100%" 
            src="/logo1a.png"
            alt="Logo"
          />
        </Col>
        <Col className='media-text hidden' md={6} ref={mediaTextRef}>
          <h1 className="titleColor text-center">WHAT WE DO</h1>   
          <p>At Virtual Sense, we transcend the boundaries of space by crafting state-of-the-art <span style={{fontWeight: 'bold', fontSize: '20px'}}>3D immersive virtual tours</span>. Since our inception in 2018, we've been pioneering <span style={{fontWeight: 'bold', fontSize: '20px'}}>virtual exploration</span>, empowering real estate businesses, tourism, and event venues with the ability to showcase their spaces like never before. Our <span style={{fontWeight: 'bold', fontSize: '20px'}}>commitment</span> lies in delivering an unparalleled <span style={{fontWeight: 'bold', fontSize: '20px'}}>virtual presence</span> that captures the essence and ambiance of physical locations.

With a footprint both in the US and internationally, we pride ourselves on broadening horizons and unlocking potential across the globe. 

<span style={{fontWeight: 'bold', fontSize: '20px'}}>Join us at Virtual Sense</span>, where your next journey is just a click away – no passport required.

</p>
        </Col>
      </Row>
    </Container>
  );
};

export default WhatWeDo;
