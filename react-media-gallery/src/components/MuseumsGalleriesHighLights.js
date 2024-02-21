import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './MuseumsGalleries.css';
import './Styles.css'

const MuseumsGalleriesHighLights= () => {
  return (
    <Container className="my-5">
      <h3 className="text-center mb-4 titleColor"> Here's a concise explanation of the benefits:</h3>
     
      <Row>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-house-up-fill iconColor"></i></h1>
          <h2 className='titleColor' >Global Accessibility</h2>
          <p> Virtual tours break down geographical barriers, allowing global audiences to explore museums and galleries from anywhere, anytime, significantly expanding their reach and inclusivity.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-rocket-takeoff-fill iconColor"></i></h1>
          <h2 className='titleColor'>Interactive Learning Experiences</h2>
          <p> These tours can incorporate multimedia elements such as audio guides, videos, and clickable information points, providing a rich, educational experience that can be more engaging than traditional visits.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-person-arms-up iconColor"></i></h1>
          <h2 className='titleColor'>Preservation of Exhibits</h2>
          <p>Virtual technology allows for the digital preservation of exhibits, including those that are temporary or fragile, ensuring that future generations can experience them long after they have been closed or have deteriorated.</p>
        </Col>
        </Row>
        <Row>
        <Col md={6} className="text-center accessibility">
        <h1><i class="bi bi-person-hearts iconColor"></i></h1>
          <h2 className='titleColor'>Enhanced Visitor Engagement</h2>
          <p>By offering virtual tours, museums and galleries can engage visitors in new ways, such as through online quizzes, scavenger hunts, and interactive guides, making the learning experience more dynamic and memorable.</p>
        </Col>
        <Col md={6} className="text-center">
        <h1><i class="bi bi-piggy-bank-fill iconColor"></i></h1>
          <h2 className='titleColor'>Operational Flexibility and Reach</h2>
          <p id='people'> Virtual tours can be a vital tool during times when physical access to museums and galleries is restricted, such as during renovations or public health crises, ensuring continuous engagement with their audience and maintaining interest in their collections.</p>
        </Col>
      </Row>
      <p>These highlights demonstrate the significant value that virtual tour technology brings to museums and art galleries, offering enhanced accessibility, engaging educational opportunities, and operational resilience, thereby ensuring that art and culture remain accessible to all.</p>
    </Container>
  );
};

export default MuseumsGalleriesHighLights;
