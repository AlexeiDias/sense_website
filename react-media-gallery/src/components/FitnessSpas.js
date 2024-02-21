import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles.css';



const FitnessSpa = () => {
  return (
    <Container >
      <Row className="align-items-center">
      <Col md={6} className="text-center">
        <h1><i class="material-symbols-outlined iconColor">
account_balance
</i></h1>
          <h2 className='titleColor'>Fitness and Spa</h2>
          <p>Virtual tour technology in the fitness and spa industry offers innovative ways to attract, engage, and retain clients by providing immersive previews of facilities and services.</p>
        </Col>
      
        <Col md={6}>
          <iframe 
            width="100%" 
            height="400" 
            src="https://my.matterport.com/show/?m=JVuiBtyUPoW&title=0&f=0&play=0&qs=0&brand=0&dh=1&gt=0&hr=0&vr=0&pin=0" 
            frameborder="0" 
            allowfullscreen 
            allow="xr-spatial-tracking">
          </iframe>
        </Col>
        
       
      </Row>
    </Container>
  );
};

export default FitnessSpa;
