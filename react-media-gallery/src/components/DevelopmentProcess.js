import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles.css';
import './DevelopmentProcess.css';


const DevelopmentProcess = () => {
  return (
    <Container className="my-5 DevPro-top-margin" id='development'>
     
      <Row>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-webcam-fill"></i></h1>
          <h3>Image Capture</h3>
          <p>First step towards bringing your space into the digital realm with our state-of-the-art 3D scanning process. Our team of skilled technicians will arrive at your location equipped with advanced imaging equipment, ready to meticulously capture every detail of your space.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-person-workspace"></i></h1>
          <h3>Image Editing and Rendering</h3>
          <p>The raw spatial data is enhanced by a post-production team to create realistic, detailed images. These images are then stitched into a 3D world, accessible via a weblink, allowing for an immersive exploration of spaces from any device.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-share-fill"></i></h1>
          <h3>Share Your Space</h3>
          <p>Easily share your immersive 3D worlds via email, SMS, or directly on your favorite social media and professional networking platforms. Publish on your marketing channels or embed them into your website to captivate your audience.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default DevelopmentProcess;
