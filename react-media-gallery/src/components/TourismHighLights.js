import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles.css'

const TourismHighLights= () => {
  return (
    <Container className="my-5">
      <h3 className="text-center mb-4 titleColor">Here are five highlights of its impact</h3>
     
      <Row>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-house-up-fill iconColor"></i></h1>
          <h2 className='titleColor'>Enhanced Destination Discovery</h2>
          <p> Virtual tours provide a dynamic way for tourists to explore destinations before visiting. They can virtually walk through historic sites, natural parks, and city streets, getting a realistic feel of the place and its atmosphere, which can significantly influence their travel decisions.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-rocket-takeoff-fill iconColor"></i></h1>
          <h2 className='titleColor'>Interactive Accommodation Previews</h2>
          <p>Hotels, resorts, and vacation rentals can use virtual tours to showcase their facilities, rooms, amenities, and surrounding areas. This transparency helps travelers make informed decisions about where to stay, increasing their confidence in their choice and improving overall satisfaction.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-person-arms-up iconColor"></i></h1>
          <h2 className='titleColor'>Boosted Attraction Engagement</h2>
          <p>Museums, landmarks, and theme parks offering virtual tours can captivate the interest of potential visitors by providing a sneak peek of what they can expect to see. This engagement can increase visitor numbers and enhance global awareness of the attractions.</p>
        </Col>
        </Row>
        <Row>
        <Col md={6} className="text-center accessibility">
        <h1><i class="bi bi-person-hearts iconColor"></i></h1>
          <h2 className='titleColor'>Accessible Travel Planning</h2>
          <p>Virtual tours make travel planning more accessible, especially for people with disabilities, families with young children, or those planning complex itineraries. They can explore accessibility features, evaluate suitability for children, and gauge the travel experience to ensure it meets their needs.</p>
        </Col>
        <Col md={6} className="text-center">
        <h1><i class="bi bi-piggy-bank-fill iconColor"></i></h1>
          <h2 className='titleColor'>Sustainable Tourism Promotion</h2>
          <p id='people'> By offering virtual tours, the tourism industry can promote sustainable travel practices. Virtual visits can satisfy the curiosity about fragile ecosystems and culturally sensitive sites without the environmental impact of physical tourism, helping to preserve these destinations for future generations.</p>
        </Col>
      </Row>
      <p>Virtual tour technology in the tourism industry not only enriches the travel planning process but also opens up new possibilities for global exploration, making travel more inclusive, informed, and sustainable.</p>
    </Container>
  );
};

export default TourismHighLights;
