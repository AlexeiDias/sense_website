import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles.css';
import './HospitalityHighLights.css';
import './ShowMoreEffect.css';

const HospitalityHighLights = () => {
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
        Click here to know how Virtual Tour can help, Suggested Service Package, and $price.
      </h3>
      {/* Conditional rendering based on isVisible state */}
      <div className={isVisible ? 'show' : 'hidden'}>
        <Row>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-person-hearts iconColor"></i></h1>
          <h2 className='titleColor'>Enhanced Engagement</h2>
          <p>Virtual tours captivate users, offering them an interactive and engaging way to view a property. This can lead to increased time spent on a hotel's website, improving chances of booking conversion.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-transparency iconColor"></i></h1>
          <h2 className='titleColor'>Increased Transparency</h2>
          <p>Providing a virtual tour can help set clear expectations for potential guests. It showcases the property's amenities, rooms, and facilities in detail, reducing the gap between expectations and reality.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-badge-ad-fill iconColor"></i></h1>
          <h2 className='titleColor'>Competitive Advantage</h2>
          <p>By adopting virtual tours, properties can differentiate themselves from competitors, offering an innovative and technologically advanced booking experience.</p>
        </Col>
        </Row>
        <Row>
        <Col md={6} className="text-center accessibility">
        <h1><i class="bi bi-headset-vr iconColor"></i></h1>
          <h2 className='titleColor'>Accessibility</h2>
          <p>Virtual tours make it easier for potential guests to explore a property regardless of their location, removing geographical barriers to the decision-making process.</p>
        </Col>
        <Col md={6} className="text-center">
        <h1><i class="bi bi-share-fill iconColor"></i></h1>
          <h2 className='titleColor'>Marketing Tool</h2>
          <p id="real-state">They can be shared on social media platforms, incorporated into marketing campaigns, and used in email promotions, serving as a powerful marketing tool to attract a wider audience.</p>
        </Col>
        </Row>
        <Row  className="g-4">
      <div className="card text-center">
  <div className="card-header">
  
  </div>
  <div className="card-body">
    <h5 className="card-title"> Hospitality Pack

</h5>
<p className='whatsIncluded'>
        <h4>What’s Included:</h4>
        <ul >
        <li >3D Virtual Tour + links to promote your space online</li>
        <li > HIGH RES PHOTOS</li>
        <li >3 Mattertags </li>
        <li >GOOGLE STREET VIEW</li>
        <li>QR Code to add your 3D Virtual Tour to your printed materials</li>
        <li>Social Media folder with 360 views and more</li>
        <li id="commercial-real-state">6 months of FREE cloud hosting</li>
        <li>Add: Promo Video to highlight amenities and unique property features.</li>  
        <li></li>
        <li>Up to 2,000 SF + $100 for each additional 1,000 SF</li>
        </ul>
       </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div className="card-footer text-body-secondary">
  <h5 className="card-text">Price: $449 (Base services + Promo Video $99 + $50 for the added value of a comprehensive hospitality package)
</h5>
  
  </div>
</div>
      </Row>
      
      </div>
    </Container>
  );
};

export default HospitalityHighLights;
