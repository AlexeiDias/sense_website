import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TwoColumnComponent = () => {
  return (
    <Container>
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
        <Col md={6}>
          <h2>Hospitality</h2>   
          <p>Virtual tours offer a transformative approach for the hospitality industry, allowing potential guests to explore hotels, resorts, and other accommodations before making a booking. This immersive experience can significantly enhance a customer's decision-making process by providing a realistic preview of what they can expect during their stay. Here's how virtual tours can be beneficial:

</p>
            <ul>
                <li>Enhanced Engagement: Virtual tours captivate users, offering them an interactive and engaging way to view a property. This can lead to increased time spent on a hotel's website, improving chances of booking conversion.</li>
                <li>Increased Transparency: Providing a virtual tour can help set clear expectations for potential guests. It showcases the property's amenities, rooms, and facilities in detail, reducing the gap between expectations and reality.</li>
                <li>Competitive Advantage: By adopting virtual tours, properties can differentiate themselves from competitors, offering an innovative and technologically advanced booking experience.</li>
                <li>Accessibility: Virtual tours make it easier for potential guests to explore a property regardless of their location, removing geographical barriers to the decision-making process.</li>
                <li>Marketing Tool: They can be shared on social media platforms, incorporated into marketing campaigns, and used in email promotions, serving as a powerful marketing tool to attract a wider audience.</li>
            </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default TwoColumnComponent;
