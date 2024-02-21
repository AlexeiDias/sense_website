import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles.css';



const Turism = () => {
  return (
    <Container >
      <Row className="align-items-center">
        <Col md={6}>
          <iframe 
            width="100%" 
            height="400" 
            src="https://my.matterport.com/show/?m=HPwSn5mzJ2F" 
            frameborder="0" 
            allowfullscreen 
            allow="xr-spatial-tracking">
          </iframe>
        </Col>
        <Col md={6} className="text-center">
        
        <h1><i class="material-symbols-outlined iconColor">
account_balance
</i></h1>
          <h2 className='titleColor'>Tourism</h2>   
          <p>
          Virtual tour technology is <span style={{fontWeight: 'bold', fontSize: '20px'}}>transforming</span> the <span style={{fontWeight: 'bold', fontSize: '20px'}}>tourism industry</span> by offering immersive, interactive experiences that allow potential travelers to <span style={{fontWeight: 'bold', fontSize: '20px'}}>explore destinations and attractions</span>from the comfort of their own homes.
</p>
            
        </Col>
      </Row>
    </Container>
  );
};

export default Turism;
