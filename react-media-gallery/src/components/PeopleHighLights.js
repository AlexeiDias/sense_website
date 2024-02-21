import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './PeopleHighLights.css';
import './Styles.css';
const PeopleHighLights = () => {
  return (
    <Container className="my-5">
      <h3 className="text-center mb-4 titleColor">Here's a detailed look at the potential benefits and applications:</h3>
      <Row>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-bullseye iconColor"></i></h1>
          <h2 className='titleColor'>Realism and Accuracy</h2>
          <p>This realism goes beyond current 2D images and basic 3D models, offering a more immersive and informative shopping experience.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-sunglasses iconColor"></i></h1>
          <h2 className='titleColor'>Virtual Fashion Shows</h2>
          <p>Designers can use 3D scanning and VR to showcase their collections in virtual fashion shows, accessible to a global audience.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-badge-ad-fill iconColor"></i></h1>
          <h2 className='titleColor'>Storytelling</h2>
          <p>Brands can use these technologies to create immersive narratives around their collections, allowing customers to explore the inspiration, design process, and lifestyle associated with their clothing in a more engaging way than traditional media can offer.</p>
        </Col>
        
      </Row>
      <p>Bring people into Virtual tour models opens up possibilities for exploring themes of nostalgia, the human desire to capture and hold onto fleeting moments, and the implications of technology's role in our personal lives. It could be fascinating to contrast traditional ways of preserving memories (like photo albums and home videos) with this futuristic approach, examining what is gained and what might be lost in the translation from physical to digital.</p>
    </Container>
  );
};

export default PeopleHighLights;
