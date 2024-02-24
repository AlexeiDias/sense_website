import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles.css';
import './DevelopmentProcess.css';
import createObserver from './Observer.js'; // Adjust the path as necessary

const DevelopmentProcess = () => {
  // Create refs for the elements to observe
  const colRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observer = createObserver();

    // Start observing each column
    colRefs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      colRefs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <Container className="my-5 DevPro-top-margin" id='development'>
      <Row>
        {colRefs.map((ref, index) => (
          <Col md={4} className="text-center hidden" ref={ref} key={index}>
            {/* Content based on index */}
            <h1><i className={index === 0 ? "bi bi-webcam-fill" : index === 1 ? "bi bi-person-workspace" : "bi bi-share-fill"}></i></h1>
            <h3>{index === 0 ? "Image Capture" : index === 1 ? "Image Editing and Rendering" : "Share Your Space"}</h3>
            <p>{index === 0 ? "First step towards bringing your space into the digital realm with our state-of-the-art 3D scanning process. Our team of skilled technicians will arrive at your location equipped with advanced imaging equipment, ready to meticulously capture every detail of your space." : 
               index === 1 ? "The raw spatial data is enhanced by a post-production team to create realistic, detailed images. These images are then stitched into a 3D world, accessible via a weblink, allowing for an immersive exploration of spaces from any device." : 
               "Easily share your immersive 3D worlds via email, SMS, or directly on your favorite social media and professional networking platforms. Publish on your marketing channels or embed them into your website to captivate your audience."}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DevelopmentProcess;
