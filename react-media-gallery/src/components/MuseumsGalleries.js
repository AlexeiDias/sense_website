import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles.css';
import './MuseumsGalleries.css';


const MuseumsGalleries = () => {
  return (
    <Container >
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
        <Col className='container text-center' md={6}>
        <h1><i class="material-symbols-outlined iconColor">
account_balance
</i></h1>
          <h2 className='titleColor'>Museums and Galleries</h2>
          <p>Virtual tour technology is reshaping the way museums and art galleries <span style={{fontWeight: 'bold', fontSize: '20px'}}>engage</span> with their <span style={{fontWeight: 'bold', fontSize: '20px'}}>audiences</span>, making <span style={{fontWeight: 'bold', fontSize: '20px'}}>art</span> and <span style={{fontWeight: 'bold', fontSize: '20px'}}>culture</span> more <span style={{fontWeight: 'bold', fontSize: '20px'}}>accessible</span> while offering new avenues for <span style={{fontWeight: 'bold', fontSize: '20px'}}>education</span> and <span style={{fontWeight: 'bold', fontSize: '20px'}}>interaction</span>.</p>
        </Col>
       
      </Row>
    </Container>
  );
};

export default MuseumsGalleries;
