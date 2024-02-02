import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const EssentialFutures = () => {
  return (
    <div className="essential-futures">
      <h2>Essentials</h2>
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
      {/* Second Row */}
      <Row xs={1} md={3} className="g-4 mt-3">
        {[...Array(3)].map((_, idx) => (
          <Col key={idx + 3}>
            <Card>
              <Card.Img variant="top" src="image_src_here" />
              <Card.Body>
                <Card.Title>Card Title {idx + 4}</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to additional content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EssentialFutures;
