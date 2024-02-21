import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './BusinessComponent.css';
import './Styles.css'

const EventVenuesHighLights= () => {
  return (
    <Container className="my-5">
      <h3 className="text-center mb-4 titleColor">Here are five highlights of its impact</h3>
     
      <Row>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-house-up-fill iconColor"></i></h1>
          <h2 className='titleColor'>Enhanced Venue Showcasing</h2>
          <p>Virtual tours allow event planners and clients to explore venues in great detail from anywhere in the world, offering a realistic sense of the space, layout, and ambiance without the need for a physical visit. This accessibility is especially beneficial for international events or clients who are unable to travel.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-rocket-takeoff-fill iconColor"></i></h1>
          <h2 className='titleColor'>Increased Booking Confidence</h2>
          <p>By providing an immersive view of the event spaces, virtual tours help clients make informed decisions, increasing their confidence in the venue choice. This transparency can lead to higher satisfaction rates and potentially more bookings.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-person-arms-up iconColor"></i></h1>
          <h2 className='titleColor'>Efficient Planning and Customization</h2>
          <p>Event organizers can use virtual tours to plan the layout and design of an event, from seating arrangements to decorations, without having to be on-site. This can streamline the planning process and facilitate better communication between clients and venue staff.</p>
        </Col>
        </Row>
        <Row>
        <Col md={6} className="text-center accessibility">
        <h1><i class="bi bi-person-hearts iconColor"></i></h1>
          <h2 className='titleColor'>Competitive Advantage</h2>
          <p>Venues offering virtual tours stand out in a crowded market by providing a modern, innovative service that appeals to tech-savvy clients looking for a unique and convenient way to explore and book event spaces.</p>
        </Col>
        <Col md={6} className="text-center">
        <h1><i class="bi bi-piggy-bank-fill iconColor"></i></h1>
          <h2 className='titleColor'>Year-Round Visibility</h2>
          <p id='people'>Virtual tours give venues the ability to showcase their spaces year-round, regardless of weather, availability, or current events. This continuous exposure can attract a wider audience, including planners of off-season and last-minute events, by ensuring the venue remains accessible and top of mind.</p>
        </Col>
      </Row>
      <p>Incorporating virtual tour technology offers event venues a powerful tool to attract clients, streamline the event planning process, and deliver a higher level of service that meets the expectations of today's digital-first consumers.</p>
    </Container>
  );
};

export default EventVenuesHighLights;
