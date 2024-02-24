import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles.css';



const AboutUs = () => {
  return (
    <Container className='container-margin-top-bottom' id='about-us'>
      <Row className="align-items-center">
      <Col md={12} className="text-center">
        <h1><i class="material-symbols-outlined iconColor">
account_balance
</i></h1>
          <h2 className='titleColor'>About Us</h2>
          <p>Virtual tour technology is making significant inroads into the automotive showroom industry, transforming the way customers interact with vehicles and enhancing the overall buying experience.</p>
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
        
       
      
    </Container>
  );
};

export default AboutUs;
