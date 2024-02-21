import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './RetailHighLights.css';
import './Styles.css'

const RetailHighLights= () => {
  return (
    <Container className="my-5">
      <h3 className="text-center mb-4 titleColor"> Here are five highlights of its use in the retail sector</h3>
     
      <Row>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-house-up-fill title"></i></h1>
          <h2 className='titleColor'>Immersive Shopping Experience</h2>
          <p>Virtual tours provide customers with a 360-degree view of stores and products, making the online shopping experience more immersive and engaging. This can lead to increased customer satisfaction and loyalty.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-rocket-takeoff-fill title"></i></h1>
        <h2 className='titleColor'>Global Accessibility</h2>
          <p>  With virtual tours, retailers can transcend geographical limitations, allowing customers from anywhere in the world to explore their stores as if they were physically present. This accessibility can significantly expand a retailer's customer base.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-person-arms-up title"></i></h1>
          <h2 className='titleColor'>Reduced Return Rates</h2>
          <p> By offering a more accurate representation of products through virtual tours, customers can make better-informed decisions, leading to lower return rates and higher customer satisfaction.</p>
        </Col>
        </Row>
        <Row>
        <Col md={6} className="text-center accessibility">
        <h1><i class="bi bi-person-hearts title"></i></h1>
          <h2 className='titleColor'>Enhanced Product Interaction</h2>
          <p> Virtual tours can include interactive elements such as clickable product descriptions, videos, and links to purchase pages, providing a rich and informative shopping experience that goes beyond traditional online shopping.</p>
        </Col>
        <Col md={6} className="text-center">
        <h1><i class="bi bi-piggy-bank-fill title"></i></h1>
          <h2 className='titleColor'>Valuable Consumer Insights</h2>
          <p id='people'>Retailers can track how customers interact with their virtual tours, gaining insights into preferences, popular products, and navigation patterns. This data can inform marketing strategies, product placement, and inventory management, allowing for a more tailored shopping experience.</p>
        </Col>
      </Row>
      <p>These highlights underscore the transformative potential of virtual tour technology in the retail industry, offering a blend of immersive experiences, expanded reach, and insightful data to drive sales and customer engagement.</p>
    </Container>
  );
};

export default RetailHighLights;
