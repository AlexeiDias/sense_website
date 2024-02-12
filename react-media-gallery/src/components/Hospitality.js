import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Hospitality.css'


const TwoColumnComponent = () => {
  return (
    <Container >
      <Row className="align-items-center">
        <Col md={6}>
          <iframe 
            width="100%" 
            height="400" 
            src="https://my.matterport.com/show/?m=nFXjkP6meiR" 
            frameborder="0" 
            allowfullscreen 
            allow="xr-spatial-tracking">
          </iframe>
        </Col>
        <Col className='container fontBarlow' md={6}>
          <h2 className='title text-center mb-4 title'>HOSPITALITY</h2>   
          <p>Virtual tours offer a <span style={{fontWeight: 'bold', fontSize: '20px'}}>transformative approach</span> for the <span style={{fontWeight: 'bold', fontSize: '20px'}}>hospitality industry</span>, allowing potential guests <span style={{fontWeight: 'bold', fontSize: '20px'}}>to explore</span> hotels, resorts, and other <span style={{fontWeight: 'bold', fontSize: '20px'}}>accommodations</span> before making a booking. This <span style={{fontWeight: 'bold', fontSize: '20px'}}>immersive experience</span> can significantly <span style={{fontWeight: 'bold', fontSize: '20px'}}>enhance a customer's decision-making</span> process by providing a realistic preview of what they can expect during their stay. Here's how virtual tours can be beneficial:

</p>
            
        </Col>
      </Row>
    </Container>
  );
};

export default TwoColumnComponent;
