import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles.css';

const AutomotiveHighLights = () => {
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
        Click here for five highlights of its impact, suggested service package, and $price.
      </h3>
     
      {/* Conditional rendering based on isVisible state */}
      <div className={isVisible ? 'show' : 'hidden'}>
        <Row>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-house-up-fill iconColor"></i></h1>
          <h2 className='titleColor'>Immersive Vehicle Exploration</h2>
          <p>Virtual tours allow customers to explore vehicles in detail from anywhere, at any time. This technology enables a 360-degree view of both the exterior and interior, allowing potential buyers to examine car features, finishes, and designs as if they were physically present in the showroom.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-rocket-takeoff-fill iconColor"></i></h1>
          <h2 className='titleColor'>Personalized Experience</h2>
          <p>Interactive elements within virtual tours can offer personalized experiences, such as changing the car color, wheel design, or interior finishes in real-time. This customization helps customers make more informed decisions and increases their emotional connection to the vehicle.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-person-arms-up iconColor"></i></h1>
          <h2 className='titleColor'>Enhanced Customer Reach</h2>
          <p> By providing virtual tours online, automotive dealers can extend their reach beyond the local area, attracting potential buyers from a wider geographical range. This accessibility can significantly increase the customer base and potential sales.</p>
        </Col>
        </Row>
        <Row>
        <Col md={6} className="text-center accessibility">
        <h1><i class="bi bi-person-hearts iconColor"></i></h1>
          <h2 className='titleColor'>Reduced Sales Pressure</h2>
          <p>Shopping for a car through a virtual tour can reduce the pressure and anxiety often associated with visiting a dealership. Customers can explore options at their own pace, leading to a more comfortable and satisfying buying experience.</p>
        </Col>
        <Col md={6} className="text-center">
        <h1><i class="bi bi-piggy-bank-fill iconColor"></i></h1>
          <h2 className='titleColor'>Cost-Effective Marketing</h2>
          <p id='people'>Virtual tours can serve as a powerful marketing tool, allowing dealerships to showcase their vehicles in the best possible light without the need for physical space. This approach can be particularly effective for highlighting new models or special editions, creating excitement and anticipation without the logistical challenges of traditional unveilings.</p>
        </Col>
        </Row>
        <Row  className="g-4">
      <div className="card text-center">
  <div className="card-header">
  
  </div>
  <div className="card-body">
    <h5 className="card-title"> Automotive Pack

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
        <li>Add: Promo Video to showcase vehicle features dynamically.</li>
        <li>Up to 2,000 SF + $100 for each additional 1,000 SF</li>
        </ul>
       </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div className="card-footer text-body-secondary">
  <h5 className="card-text">Price: $399 (Base services + Promo Video $99 + $101 for the added value of a dynamic automotive showcase)
</h5>
  
  </div>
</div>
      </Row>
        
      </div>
      <p>The use of virtual tour technology in the automotive showroom industry not only enhances the customer's vehicle exploration experience but also offers dealers innovative ways to market their products, expand their reach, and streamline the buying process.</p>
    </Container>
  );
};

export default AutomotiveHighLights;
