import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HospitalityBullets.css'


const HospitalityBullets = () => {
  return (
    <Container className="my-5 fontBarlow">
      <h2 className="text-center mb-4 title">How Virtual Tour can help</h2>
      <Row>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-person-hearts title"></i></h1>
          <h3>Enhanced Engagement</h3>
          <p>Virtual tours captivate users, offering them an interactive and engaging way to view a property. This can lead to increased time spent on a hotel's website, improving chances of booking conversion.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-transparency title"></i></h1>
          <h3>Increased Transparency</h3>
          <p>Providing a virtual tour can help set clear expectations for potential guests. It showcases the property's amenities, rooms, and facilities in detail, reducing the gap between expectations and reality.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-badge-ad-fill title"></i></h1>
          <h3>Competitive Advantage</h3>
          <p>By adopting virtual tours, properties can differentiate themselves from competitors, offering an innovative and technologically advanced booking experience.</p>
        </Col>
        </Row>
        <Row>
        <Col md={6} className="text-center accessibility">
        <h1><i class="bi bi-headset-vr title"></i></h1>
          <h3>Accessibility</h3>
          <p>Virtual tours make it easier for potential guests to explore a property regardless of their location, removing geographical barriers to the decision-making process.</p>
        </Col>
        <Col md={6} className="text-center">
        <h1><i class="bi bi-share-fill title"></i></h1>
          <h3>Marketing Tool</h3>
          <p>They can be shared on social media platforms, incorporated into marketing campaigns, and used in email promotions, serving as a powerful marketing tool to attract a wider audience.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default HospitalityBullets;
