import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const DevelopmentProcess = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Development Process</h2>
      <Row>
        <Col md={4} className="text-center">
          <h3>Image Capture</h3>
          <p>first step towards bringing your space into the digital realm with our state-of-the-art 3D scanning process. Our team of skilled technicians will arrive at your location equipped with advanced imaging equipment, ready to meticulously capture every detail of your space.</p>
        </Col>
        <Col md={4} className="text-center">
          <h3>Image Editing and Rendering</h3>
          <p>digital process where raw spatial data is enhanced by a post-production team to create realistic, detailed images. These images are then stitched into a 3D world, accessible via a weblink, allowing for an immersive exploration of spaces from any device. It emphasizes the use of advanced tools to ensure the authenticity of the virtual experience, aiming to make viewers feel as though they are physically present in the space.</p>
        </Col>
        <Col md={4} className="text-center">
          <h3>You Share</h3>
          <p>SHARE YOUR SPACE: Easily share your immersive 3D worlds via email, SMS, or directly on your favorite social media and professional networking platforms. Publish on your marketing channels or embed them into your website to captivate your audience. Start sharing today and unlock new opportunities for visibility, engagement, and exploration. Whether for business, education, or personal enjoyment, make your spaces work for you.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default DevelopmentProcess;
