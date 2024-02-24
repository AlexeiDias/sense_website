import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles.css';



const Hospitality = () => {
  return (
    <Container className='container-margin-top-bottom' id='hospitality'>
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
        <Col className='container text-center' md={6}>
        
        <h1><i class="material-symbols-outlined iconColor">
account_balance
</i></h1>
          <h2 className='titleColor'>Hospitality</h2>   
          <p>Virtual tours offer a <span style={{fontWeight: 'bold', fontSize: '20px'}}>transformative approach</span> for the <span style={{fontWeight: 'bold', fontSize: '20px'}}>hospitality industry</span>, allowing potential guests <span style={{fontWeight: 'bold', fontSize: '20px'}}>to explore</span> hotels, resorts, and other <span style={{fontWeight: 'bold', fontSize: '20px'}}>accommodations</span> before making a booking. This <span style={{fontWeight: 'bold', fontSize: '20px'}}>immersive experience</span> can significantly <span style={{fontWeight: 'bold', fontSize: '20px'}}>enhance a customer's decision-making</span> process by providing a realistic preview of what they can expect during their stay. Here's how virtual tours can be beneficial:

</p>
            
        </Col>
      </Row>
    </Container>
  );
};

export default Hospitality;
