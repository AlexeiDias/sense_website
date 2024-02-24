import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles.css'

const PeopleComponent = () => {
  return (
    <Container className='container-margin-top-bottom' id='people-scanning'>
      <Row className="align-items-center">
      <Col className='container text-center' md={6}>
          <h2 className='titleColor'>People Scanning</h2>   
          <p> It leverages the <span style={{fontWeight: 'bold', fontSize: '20px'}}>emotional</span> weight of significant <span style={{fontWeight: 'bold', fontSize: '20px'}}>life moments</span> and the allure of cutting-edge technology, offering a unique way for people to <span style={{fontWeight: 'bold', fontSize: '20px'}}>revisit</span> and relive their most cherished <span style={{fontWeight: 'bold', fontSize: '20px'}}>memories</span>. 3D scanning and virtual reality (VR) in <span style={{fontWeight: 'bold', fontSize: '20px'}}>fashion modeling</span> and for <span style={{fontWeight: 'bold', fontSize: '20px'}}>clothing and accessory sales</span> holds tremendous potential, promising to revolutionize the way consumers interact with fashion. This technology could significantly <span style={{fontWeight: 'bold', fontSize: '20px'}}>enhance</span> the online <span style={{fontWeight: 'bold', fontSize: '20px'}}>shopping experience, improve customer satisfaction</span>, and open new avenues for creative expression and marketing within the fashion industry.</p>
            
        </Col>
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
        
      </Row>
    </Container>
  );
};

export default PeopleComponent;
