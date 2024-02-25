import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles.css';
import './ShowMoreEffect.css';

const ConstructionArchitectureHighLights = () => {
  // State to control the visibility of the content
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility state
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
        Here are five highlights of its application
      </h3>
     
      {/* Conditional rendering based on isVisible state */}
      <div className={isVisible ? 'show' : 'hidden'}>
        <Row>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-house-up-fill iconColor"></i></h1>
          <h2 className='titleColor'>Enhanced Client Engagement</h2>
          <p>Virtual tours enable clients to visualize architectural designs and construction progress in a highly immersive and interactive manner. This technology helps bridge the gap between technical drawings and the completed project, allowing clients to better understand the vision and details of their investment.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-rocket-takeoff-fill iconColor"></i></h1>
          <h2 className='titleColor'>Improved Project Collaboration</h2>
          <p>Virtual tours facilitate collaboration among architects, engineers, contractors, and clients, regardless of their physical location. Stakeholders can virtually walk through the construction site or architectural model, discuss changes, and make decisions in real-time, leading to more efficient project management and reduced misunderstandings.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-person-arms-up iconColor"></i></h1>
          <h2 className='titleColor'>Effective Marketing Tool</h2>
          <p> For architects and builders, virtual tours serve as a powerful marketing tool, showcasing their capabilities and previous projects in a dynamic, engaging format. This can help attract new clients by demonstrating expertise and the ability to deliver high-quality projects.</p>
        </Col>
        </Row>
        <Row>
        <Col md={6} className="text-center accessibility">
        <h1><i class="bi bi-person-hearts iconColor"></i></h1>
          <h2 className='titleColor'>Reduced Need for Physical Site Visits</h2>
          <p>Virtual tours can significantly reduce the frequency of physical site visits, saving time and resources for both clients and project teams. This is particularly beneficial for projects in remote locations or for clients who are based far from the construction site.</p>
        </Col>
        <Col md={6} className="text-center">
        <h1><i class="bi bi-piggy-bank-fill iconColor"></i></h1>
          <h2 className='titleColor'>Early Detection of Design Issues</h2>
          <p id='people'>By providing a realistic view of the project before construction begins, virtual tours can help identify design issues or potential improvements early in the process. This proactive approach can prevent costly modifications during construction and ensure the final build more closely aligns with client expectations.</p>
        </Col>
        </Row>
        <Row  className="g-4">
      <div className="card text-center">
  <div className="card-header">
  
  </div>
  <div className="card-body">
    <h5 className="card-title"> Construction and Architecture Pack

</h5>
<p className='whatsIncluded'>
        <h4>What’s Included:</h4>
        <ul >
        <li >3D Virtual Tour + links to promote your space online</li>
        <li > HIGH RES PHOTOS</li>
        <li >3 Mattertags </li>
        <li >GOOGLE STREET VIEW</li>
        <li>QR Code to add your 3D Virtual Tour to your printed materials</li>
        <li>Social Media folder with 360 views and more</li>
        <li id="commercial-real-state">6 months of FREE cloud hosting</li>
        <li>Add: Additional Mattertags for detailed project insights and annotations.</li>  
        <li>Up to 2,000 SF + $100 for each additional 1,000 SF</li>
        </ul>
       </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div className="card-footer text-body-secondary">
  <h5 className="card-text">Price: $449 (Base package + $15 for 3 additional Mattertags + $85 for the added project collaboration value)
</h5>
  
  </div>
</div>
      </Row>
        
      </div>
      <p>Overall, the use of virtual tour technology in the construction and architecture industries enhances communication, improves project outcomes, and provides a competitive edge in client engagement and marketing.</p>
    </Container>
  );
};

export default ConstructionArchitectureHighLights;
