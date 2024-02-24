import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles.css';
import createObserver from './Observer.js'; // Make sure this path is correct

const IndustriesIntro = () => {
  // Create a ref for the element you want to observe
  const introRef = useRef(null);

  useEffect(() => {
    // Initialize observer with createObserver function from Observer.js
    const observer = createObserver();

    // Start observing the ref element
    if (introRef.current) {
      observer.observe(introRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
    };
  }, []);

  return (
    <Container className='container media-container container-margin-top-bottom' id='introduction' >
      <Row className="align-items-center">
        <Col md={6} className='container hidden' ref={introRef}>
          <h1 className='titleColor text-center mb-4'>INDUSTRIES</h1>   
          <p>
            Virtual tour technology can be incredibly useful across <span style={{fontWeight: 'bold', fontSize: '20px'}}>various industries</span> to enhance customer engagement, offer <span style={{fontWeight: 'bold', fontSize: '20px'}}>immersive experiences</span>, and improve service delivery. Here are some examples:
          </p>  
        </Col>
      </Row>
    </Container>
  );
};

export default IndustriesIntro;
