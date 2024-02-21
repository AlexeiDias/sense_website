import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './BusinessComponent.css';
import './Styles.css'

const EducationHighLights= () => {
  return (
    <Container className="my-5">
      <h3 className="text-center mb-4 titleColor">Here are five highlights of its application</h3>
     
      <Row>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-house-up-fill iconColor"></i></h1>
          <h2 className='titleColor'>Enhanced Campus Visits</h2>
          <p>Virtual tours allow prospective students and their families to explore university and college campuses from anywhere in the world. This accessibility is crucial for international students or those who cannot physically visit due to distance or financial constraints, providing them with a comprehensive view of campus facilities, dormitories, and academic buildings.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-rocket-takeoff-fill iconColor"></i></h1>
          <h2 className='titleColor'>Interactive Learning Experiences</h2>
          <p>Educational institutions can use virtual tours to create interactive learning modules for subjects that benefit from immersive experiences, such as history, biology, and geography. These tours can take students to historical sites, natural parks, and even into construction sites and architecture projects, enhancing their understanding and retention of complex subjects.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-person-arms-up iconColor"></i></h1>
          <h2 className='titleColor'>Increased Accessibility</h2>
          <p>Virtual tours can make education more accessible to students with disabilities by allowing them to explore and interact with spaces that might be physically challenging to navigate. This inclusivity promotes equal opportunities for all students to participate in educational activities.</p>
        </Col>
        </Row>
        <Row>
        <Col md={6} className="text-center accessibility">
        <h1><i class="bi bi-person-hearts iconColor"></i></h1>
          <h2 className='titleColor'>Library and Resource Exploration</h2>
          <p>Virtual tours of libraries and resource centers can help students familiarize themselves with the available resources, study spaces, and special collections without the need to physically search through them. This can encourage the use of academic resources and facilitate independent learning.</p>
        </Col>
        <Col md={6} className="text-center">
        <h1><i class="bi bi-piggy-bank-fill iconColor"></i></h1>
          <h2 className='titleColor'>Orientation and Onboarding</h2>
          <p id='people'> For new students, virtual tours can be an essential part of the orientation process, helping them navigate the complexities of campus life, understand where key facilities are located, and start building a sense of community before they arrive on campus.</p>
        </Col>
      </Row>
      <p>By leveraging virtual tour technology, the education industry can provide more engaging, accessible, and comprehensive experiences for students, enhancing their learning journey and supporting their academic success.</p>
    </Container>
  );
};

export default EducationHighLights;
