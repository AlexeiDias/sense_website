import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './RetailHighLights.css';
import './Styles.css'

const RetailHighLights = () => {
  const [showHighlights, setShowHighlights] = useState(false);

  const toggleHighlights = () => {
    setShowHighlights(!showHighlights);
  };

  return (
    <Container className="my-5">
      <h3 className="text-center mb-4 titleColor" onClick={toggleHighlights} style={{cursor: 'pointer'}}>
        Click here to read five highlights of its use in the retail sector, suggested service package, and $price.
      </h3>
     
      <Row className={showHighlights ? 'show' : 'hidden'}>
      <Col md={4} className="text-center">
        <h1><i class="bi bi-house-up-fill iconColor"></i></h1>
          <h2 className='titleColor'>Immersive Shopping Experience</h2>
          <p>Virtual tours provide customers with a 360-degree view of stores and products, making the online shopping experience more immersive and engaging. This can lead to increased customer satisfaction and loyalty.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-rocket-takeoff-fill iconColor"></i></h1>
        <h2 className='titleColor'>Global Accessibility</h2>
          <p>  With virtual tours, retailers can transcend geographical limitations, allowing customers from anywhere in the world to explore their stores as if they were physically present. This accessibility can significantly expand a retailer's customer base.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-person-arms-up iconColor"></i></h1>
          <h2 className='titleColor'>Reduced Return Rates</h2>
          <p> By offering a more accurate representation of products through virtual tours, customers can make better-informed decisions, leading to lower return rates and higher customer satisfaction.</p>
        </Col>
      </Row>
      <Row className={showHighlights ? 'show' : 'hidden'}>
      <Col md={6} className="text-center accessibility">
        <h1><i class="bi bi-person-hearts iconColor"></i></h1>
          <h2 className='titleColor'>Enhanced Product Interaction</h2>
          <p> Virtual tours can include interactive elements such as clickable product descriptions, videos, and links to purchase pages, providing a rich and informative shopping experience that goes beyond traditional online shopping.</p>
        </Col>
        <Col md={6} className="text-center">
        <h1><i class="bi bi-piggy-bank-fill iconColor"></i></h1>
          <h2 className='titleColor'>Valuable Consumer Insights</h2>
          <p id='people'>Retailers can track how customers interact with their virtual tours, gaining insights into preferences, popular products, and navigation patterns. This data can inform marketing strategies, product placement, and inventory management, allowing for a more tailored shopping experience.</p>
		
        </Col>
      </Row>
      <p >
        These highlights underscore the transformative potential of virtual tour technology in the retail industry, offering a blend of immersive experiences, expanded reach, and insightful data to drive sales and customer engagement.
      </p>
      <Row  className={showHighlights ? 'show' : 'hidden'}>
      <div className="card text-center">
  <div className="card-header">
  
  </div>
  <div className="card-body">
    <h5 className="card-title"> Retail Pack

</h5>
<p className='whatsIncluded'>
        <h4>What’s Included:</h4>
        <ul >
        <li >3D Virtual Tour + links to promote your space online</li>
        <li > HIGH RES PHOTOS</li>
       
       
        <li >3 Mattertags ($5 each extra Mattertag)</li>
        <li >GOOGLE STREET VIEW</li>
        <li>QR Code to add your 3D Virtual Tour to your printed materials</li>
        <li>Social Media folder with 360 views and more</li>
        <li id="commercial-real-state">6 months of FREE cloud hosting</li>
        <li>Add: Promo Video to showcase product highlights and special offers.</li>
        <li>Up to 2,000 SF + $100 for each additional 1,000 SF</li> 
        </ul>
       </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div className="card-footer text-body-secondary">
  <h5 className="card-text">Price: $349 (Base services at $199 + Promo Video $99 + $51 for the added value of a tailored retail package)
</h5>
  
  </div>
</div>
      </Row>
     
    </Container>
  );
};

export default RetailHighLights;
