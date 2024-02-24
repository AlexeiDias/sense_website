import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles.css';


const Automotive = () => {
  return (
    <Container className='container-margin-top-bottom' id='automotive'>
      <Row className="align-items-center">
      
      
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
        <Col md={6} className="text-center">
        <h1><i class="material-symbols-outlined iconColor">
account_balance
</i></h1>
          <h2 className='titleColor'>Automotive Showrooms</h2>
          <p>Virtual tour technology is making significant inroads into the automotive showroom industry, transforming the way customers interact with vehicles and enhancing the overall buying experience.</p>
        </Col>
       
      </Row>
    </Container>
  );
};

export default Automotive;
