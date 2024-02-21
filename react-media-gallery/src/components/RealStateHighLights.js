import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles.css'

const RealStateHighLights= () => {
  return (
    <Container className="my-5">
      <h3 className="text-center mb-4 titleColor"> Here's a concise explanation of the benefits:</h3>
     
      <Row>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-house-up-fill iconColor"></i></h1>
          <h2 className='titleColor'>24/7 Open House</h2>
          <p>Virtual tours provide an always-open house that potential buyers can visit at their convenience, removing the need for scheduling and travel.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-rocket-takeoff-fill iconColor"></i></h1>
          <h2 className='titleColor'>Wider Reach</h2>
          <p> They enable realtors to reach a broader audience, including international buyers, by offering an immersive viewing experience that's accessible from anywhere in the world.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-person-arms-up iconColor"></i></h1>
          <h2 className='titleColor'>Increased Engagement</h2>
          <p> Interactive and engaging, virtual tours keep potential buyers on listings longer, providing them with a comprehensive view of the property and its features.</p>
        </Col>
        </Row>
        <Row>
        <Col md={6} className="text-center accessibility">
        <h1><i class="bi bi-person-hearts iconColor"></i></h1>
          <h2 className='titleColor'>Emotional Connection</h2>
          <p> Virtual tours can help buyers form an emotional connection to a property, imagining themselves living in the space, which can accelerate the decision-making process.</p>
        </Col>
        <Col md={6} className="text-center">
        <h1><i class="bi bi-piggy-bank-fill iconColor"></i></h1>
          <h2 className='titleColor'>Cost-Effective Marketing</h2>
          <p id='people'> They are a cost-effective marketing tool, eliminating the need for multiple in-person showings and open houses, while maximizing the property's exposure.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default RealStateHighLights;
