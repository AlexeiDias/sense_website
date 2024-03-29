import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './BusinessComponent.css';
import './Styles.css'

const VirtualStoreHighLights= () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 title"> Here are some key advantages of incorporating virtual tour technology into virtual stores:</h2>
     
      <Row>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-house-up-fill title"></i></h1>
          <h3>24/7 Open House</h3>
          <p>Virtual tours provide an always-open house that potential buyers can visit at their convenience, removing the need for scheduling and travel.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-rocket-takeoff-fill title"></i></h1>
          <h3>Wider Reach</h3>
          <p> They enable realtors to reach a broader audience, including international buyers, by offering an immersive viewing experience that's accessible from anywhere in the world.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-person-arms-up title"></i></h1>
          <h3>Increased Engagement</h3>
          <p> Interactive and engaging, virtual tours keep potential buyers on listings longer, providing them with a comprehensive view of the property and its features.</p>
        </Col>
        </Row>
        <Row>
        <Col md={6} className="text-center accessibility">
        <h1><i class="bi bi-person-hearts title"></i></h1>
          <h3>Emotional Connection</h3>
          <p> Virtual tours can help buyers form an emotional connection to a property, imagining themselves living in the space, which can accelerate the decision-making process.</p>
        </Col>
        <Col md={6} className="text-center">
        <h1><i class="bi bi-piggy-bank-fill title"></i></h1>
          <h3>Cost-Effective Marketing</h3>
          <p id='people'> They are a cost-effective marketing tool, eliminating the need for multiple in-person showings and open houses, while maximizing the property's exposure.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default VirtualStoreHighLights;
