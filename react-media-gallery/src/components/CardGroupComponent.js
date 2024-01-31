import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './CardGroupComponent.css';

const CardGroupComponent = () => {
  // Array representing card data including different iframe URLs
  const cards = [
    { id: 1, title: 'Card Title 1', iframeSrc: 'https://my.matterport.com/show/?m=nFXjkP6meiR' },
    { id: 2, title: 'Card Title 2', iframeSrc: 'https://my.matterport.com/show/?m=zYzoTXMyCKH' },
    { id: 3, title: 'Card Title 3', iframeSrc: 'https://my.matterport.com/show/?m=87QDTZ1JxHg' },
    { id: 4, title: 'Card Title 4', iframeSrc: 'https://my.matterport.com/show/?m=SihZxV6Fm6A' },
    { id: 5, title: 'Card Title 5', iframeSrc: 'https://my.matterport.com/show/?m=v3NVjC7gaXE' },
    { id: 6, title: 'Card Title 6', iframeSrc: 'https://my.matterport.com/show/?m=LgdXpU1keku' }
  ];

  return (
    <Row>
      {cards.map((card) => (
        <Col md={2} sm={4} xs={6} key={card.id}>
          <Card className="custom-card">
          
              
              <iframe 
                 
                src={card.iframeSrc} 
                frameborder="0" 
                allowfullscreen 
                allow="xr-spatial-tracking">
              </iframe>
            
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardGroupComponent;
