import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './BusinessComponent.css';
import './Styles.css';
import './ShowMoreEffect.css';

const EventVenuesHighLights = () => {
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
        Click here to for five highlights of its impact, suggested service package, and $price.
      </h3>
      {/* Conditional rendering based on isVisible state */}
      <div className={isVisible ? 'show' : 'hidden'}>
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
        <Row  className="g-4">
      <div className="card text-center">
  <div className="card-header">
  
  </div>
  <div className="card-body">
    <h5 className="card-title"> Event Venues

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
        <li>Add: Extended Cloud Hosting to ensure year-round visibility.</li>  
        <li></li>
        <li>Up to 2,000 SF + $100 for each additional 1,000 SF</li>
        </ul>
       </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div className="card-footer text-body-secondary">
  <h5 className="card-text">Price: $448 (Base package + $149 for 1 year of Cloud Hosting + $50 for the added value of extended accessibility)
</h5>
  
  </div>
</div>
      </Row>
       
      </div>
      <p>Incorporating virtual tour technology offers event venues a powerful tool to attract clients, streamline the event planning process, and deliver a higher level of service that meets the expectations of today's digital-first consumers.</p>
    </Container>
  );
};

export default EventVenuesHighLights;
