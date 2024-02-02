import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ResidentialComponent = () => {
  return (
    <Container>
      <Row className="align-items-center">
        
        <Col md={6}>
          <h2>Residential</h2>   
          <p>Virtual tours in the real estate industry revolutionize how properties are marketed and sold, offering distinctive advantages for both realtors and potential buyers. Here's a concise explanation of the benefits:
</p>
            <ul>
                <li>24/7 Open House: Virtual tours provide an always-open house that potential buyers can visit at their convenience, removing the need for scheduling and travel.</li>
                <li>Wider Reach: They enable realtors to reach a broader audience, including international buyers, by offering an immersive viewing experience that's accessible from anywhere in the world.</li>
                <li>Increased Engagement: Interactive and engaging, virtual tours keep potential buyers on listings longer, providing them with a comprehensive view of the property and its features.</li>
                <li>Emotional Connection: Virtual tours can help buyers form an emotional connection to a property, imagining themselves living in the space, which can accelerate the decision-making process.</li>
                <li>Cost-Effective Marketing: They are a cost-effective marketing tool, eliminating the need for multiple in-person showings and open houses, while maximizing the property's exposure.</li>
            </ul>
        </Col>
        <Col md={6}>
          <iframe 
            width="100%" 
            height="400" 
            src="https://my.matterport.com/show/?m=zYzoTXMyCKH" 
            frameborder="0" 
            allowfullscreen 
            allow="xr-spatial-tracking">
          </iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default ResidentialComponent;
