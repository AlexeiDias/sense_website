import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles.css'

const AutomotiveHighLights= () => {
  return (
    <Container className="my-5">
      <h3 className="text-center mb-4 titleColor">Here are five highlights of its impact</h3>
     
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
      <p>The use of virtual tour technology in the automotive showroom industry not only enhances the customer's vehicle exploration experience but also offers dealers innovative ways to market their products, expand their reach, and streamline the buying process.</p>
    </Container>
  );
};

export default AutomotiveHighLights;
