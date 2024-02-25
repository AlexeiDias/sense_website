import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles.css';
import './RealStateHighLights.css';
import './ShowMoreEffect.css';

const RealStateHighLights = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Container className="my-5">
      <h3 
        className="text-center mb-4 titleColor" 
        onClick={toggleVisibility} 
        style={{ cursor: 'pointer' }}
      >
        Here's a concise explanation of the benefits:
      </h3>
     
      <Row className={isVisible ? 'show' : 'hidden'}>
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
      <Row className={isVisible ? 'show' : 'hidden'}>
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
      <Row  className={isVisible ? 'show' : 'hidden'}>
      <div className="card text-center">
  <div className="card-header">
  
  </div>
  <div className="card-body">
    <h5 className="card-title"> Real State Pack

</h5>
<p className='whatsIncluded'>
        <h4>What’s Included:</h4>
        <ul >
        <li >3D Virtual Tour + links to promote your space online</li>
        <li > HIGH RES PHOTOS</li>
       
        <li >SINGLE LISTING WEBSITE</li>
        <li >3 Mattertags ($5 each extra Mattertag)</li>
        <li >GOOGLE STREET VIEW</li>
        <li>QR Code to add your 3D Virtual Tour to your printed materials</li>
        <li>Social Media folder with 360 views and more</li>
        <li id="commercial-real-state">6 months of FREE cloud hosting</li>
        <li >Add:Floor Plan for each listing to enhance property layouts understanding.</li>
        <li></li> 
        <li>Up to 2,000 SF + $100 for each additional 1,000 SF</li> 
        </ul>
       </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div className="card-footer text-body-secondary">
  <h5 className="card-text">Price: $449 (Includes all base services + $50 for Floor Plan + $100 for the added value and integration of these services)
</h5>
  
  </div>
</div>
      </Row>
    </Container>
  );
};

export default RealStateHighLights;
