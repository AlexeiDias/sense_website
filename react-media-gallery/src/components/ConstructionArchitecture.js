import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles.css';


const ConstructionArchitecture = () => {
  return (
    <Container className='container-margin-top-bottom' id='construction'>
      <Row className="align-items-center">
      <Col className='container text-center' md={6}>
        <h1><i class="material-symbols-outlined iconColor">
account_balance
</i></h1>
          <h2 className='titleColor'>Construction and Architecture</h2>
          <p>Virtual tour technology is revolutionizing the construction and architecture industries by offering detailed, immersive views of projects at various stages of development.</p>
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

export default ConstructionArchitecture;
