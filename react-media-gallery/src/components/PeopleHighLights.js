import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './PeopleHighLights.css'

const PeopleHighLights = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 title">Here's a detailed look at the potential benefits and applications:</h2>
      <Row>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-bullseye title"></i></h1>
          <h3>Realism and Accuracy</h3>
          <p>3D scanning can create highly accurate and detailed models of clothing and accessories, allowing customers to see how these items would look on their avatars in a virtual space. This realism goes beyond current 2D images and basic 3D models, offering a more immersive and informative shopping experience.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-sunglasses title"></i></h1>
          <h3>Virtual Fashion Shows</h3>
          <p>Designers can use 3D scanning and VR to showcase their collections in virtual fashion shows, accessible to a global audience. This not only reduces the logistical costs and environmental impact of traditional shows but also allows for creative presentations that would be impossible in the physical world.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-badge-ad-fill title"></i></h1>
          <h3>Storytelling</h3>
          <p>Brands can use these technologies to create immersive narratives around their collections, allowing customers to explore the inspiration, design process, and lifestyle associated with their clothing in a more engaging way than traditional media can offer.</p>
        </Col>
        
      </Row>
    </Container>
  );
};

export default PeopleHighLights;
