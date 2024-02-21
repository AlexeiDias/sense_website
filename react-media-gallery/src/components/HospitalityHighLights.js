import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles.css';
import './HospitalityHighLights.css';


const HospitalityHighLights = () => {
  return (
    <Container className="my-5">
      <h3 className="text-center mb-4 titleColor">How Virtual Tour can help</h3>
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
    </Container>
  );
};

export default HospitalityHighLights;
