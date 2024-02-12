import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const CommercialPricing = () => {
  return (
    <div className="CommercialPricing">
      <Row  className="g-4">
      <div class="card-group">
  <div className="card">
  <iframe 
            width="100%" 
            height="400" 
            src="https://my.matterport.com/show/?m=nFXjkP6meiR" 
            frameborder="0" 
            allowfullscreen 
            allow="xr-spatial-tracking">
          </iframe>
    <div className="card-body">
      <h5 className="card-title">QR Code</h5>
      <p className="card-text">Show your Matterport model in your printed marketing materials by converting the URL into a QR code.

Then copy and paste the QR code onto your flyers and other materials. Your intended audience can scan the QR code with their smartphone and explore the Matterport Space with their phone.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>

    </div>
  </div>
  <div className="card">
  <iframe 
            width="100%" 
            height="400" 
            src="https://my.matterport.com/show/?m=nFXjkP6meiR" 
            frameborder="0" 
            allowfullscreen 
            allow="xr-spatial-tracking">
          </iframe>
    <div className="card-body">
    <h5 className="card-title">Google Street View</h5>
      <p className="card-text">Publishing to Google Street View is an exciting new way for you to extend your marketing so you and your business can reach an even bigger audience.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>

    </div>
  </div>
  <div className="card">
  <iframe 
            width="100%" 
            height="400" 
            src="https://my.matterport.com/show/?m=nFXjkP6meiR" 
            frameborder="0" 
            allowfullscreen 
            allow="xr-spatial-tracking">
          </iframe>
    <div className="card-body">
      <h5 className="card-title">Mattertags</h5>
      <p className="card-text">Use Tags to call out features, provide additional details, and generally add context to different aspects of your Matterport Space. Tags help you tell the story of your space, giving visitors the information they need.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>

    </div>
  </div>
</div>
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

export default CommercialPricing;
