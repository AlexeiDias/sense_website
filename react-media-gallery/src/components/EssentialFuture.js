import React from 'react';
import {  Row  } from 'react-bootstrap';
import './Styles.css';




const EssentialFeatures = () => {
  return (
    <div className="essential-features align-items-center">
      <Row  className="g-4">    

      <div class="card-group">
  <div className="card">
  <iframe src="https://youtube.com/embed/SVQPMv9lScs?autoplay=1&mute=1&loop=1&controls=0&playlist=SVQPMv9lScs" 
  width="100%" 
  height="400"
  frameborder="0" 
            allowfullscreen 
            allow="xr-spatial-tracking" 
  ></iframe>
    <div className="card-body">
      <h4 className="text-center title">Dollhouse</h4>
      <p className="card-text">The dollhouse view is the crown jewel of Matterport's 3D space exploration, offering an unparalleled bird's eye perspective that instantly captures the layout and dimensions of any property.</p>
      
    </div>
  </div>
  <div className="card">
  <iframe 
            width="100%" 
            height="400" 
            src="https://youtube.com/embed/-mp84ClCHMA?autoplay=1&mute=1&loop=1&controls=0&playlist=-mp84ClCHMA" 
            frameborder="0" 
            allowfullscreen 
            allow="xr-spatial-tracking">
          </iframe>
    <div className="card-body">
    <h4 className="text-center title">Highlight Reels</h4>
      <p className="card-text">You create a slideshow of destinations within the space, guiding users from view to view</p>
      
    </div>
  </div>
  <div className="card">
  <iframe 
            width="100%" 
            height="400" 
            src="https://youtube.com/embed/7soy-G3vZmM?autoplay=1&mute=1&loop=1&controls=0&playlist=7soy-G3vZmM"  
            frameborder="0" 
            allowfullscreen 
            allow="xr-spatial-tracking">
          </iframe>
    <div className="card-body">
      <h4 className="text-center title">360 Photos</h4>
      <p className="card-text">Listings that feature 3D tours stand out in crowded real estate markets. They signal to buyers that the agent or seller is employing the latest technology to provide the best possible buying experience.</p>
      
    </div>
  </div>
</div>
      </Row>
      <Row  className="g-4">
      <div class="card-group">
  <div className="card">
  <iframe 
            width="100%" 
            height="400" 
            src="https://youtube.com/embed/XQE4B1BB8Os?autoplay=1&mute=1&loop=1&controls=0&playlist=XQE4B1BB8Os" 
            frameborder="0" 
            allowfullscreen 
            allow="xr-spatial-tracking">
          </iframe>
    <div className="card-body">
      <h4 className="text-center title">QR Code</h4>
      <p className="card-text">Show your Matterport model in your printed marketing materials by converting the URL into a QR code.

Then copy and paste the QR code onto your flyers and other materials. Your intended audience can scan the QR code with their smartphone and explore the Matterport Space with their phone.</p>
      
    </div>
  </div>
  <div className="card">
  <iframe 
            width="100%" 
            height="400" 
            src="https://youtube.com/embed/TVZsmvXyIEY?autoplay=1&mute=1&loop=1&controls=0&playlist=TVZsmvXyIEY"  
            frameborder="0" 
            allowfullscreen 
            allow="xr-spatial-tracking">
          </iframe>
    <div className="card-body">
    <h4 className="text-center title">Google Street View</h4>
      <p className="card-text">Publishing to Google Street View is an exciting new way for you to extend your marketing so you and your business can reach an even bigger audience.</p>
      
    </div>
  </div>
  <div className="card">
  <iframe 
            width="100%" 
            height="400" 
            src="https://youtube.com/embed/paXWztw7Xg0?autoplay=1&mute=1&loop=1&controls=0&playlist=paXWztw7Xg0"  
            frameborder="0" 
            allowfullscreen 
            allow="xr-spatial-tracking">
          </iframe>
    <div className="card-body">
      <h4 className="text-center title">Mattertags</h4>
      <p id="residential-real-state" className="card-text">Use Tags to call out features, provide additional details, and generally add context to different aspects of your Matterport Space. Tags help you tell the story of your space, giving visitors the information they need.</p>
      
    </div>
  </div>
</div>
      </Row>
    </div>
  );
};

export default EssentialFeatures;
