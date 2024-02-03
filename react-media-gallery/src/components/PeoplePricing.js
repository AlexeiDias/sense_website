import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const PeoplePricing = () => {
  return (
    <div className="People Scanning Pricing">
      <h2>People Scanning</h2>
      {/* First Row */}
      <Row xs={1} md={3} className="g-4">
        {[...Array(3)].map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="image_src_here" />
              <Card.Body>
                <Card.Title>Card Title {idx + 1}</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to additional content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <p>
        <h6>What’s Included:</h6>
        <ul>
        <li>3D Virtual Tour links to promote your space online</li>
        <li>QR Code to add your 3D Virtual Tour to your printed materials</li>
        <li>Social Media folder with 360 views and more</li>
        <li>6 months of FREE cloud hosting</li>
          
        </ul>
       </p>
      
    </div>
  );
};

export default PeoplePricing;
