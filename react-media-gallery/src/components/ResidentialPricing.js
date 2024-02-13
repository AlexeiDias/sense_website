import React from 'react';
import {Row} from 'react-bootstrap';
import './Styles.css';
import './WhatsIncluded.css';




const EssentialFeatures = () => {
  return (
    <div className="essential-features align-items-center">
      <Row  className="g-4">
      <div class="card-group">
  <div className="card text-center">
  <iframe 
            width="100%" 
            height="400" 
            src="https://my.matterport.com/show/?m=nFXjkP6meiR" 
            frameborder="0" 
            allowfullscreen 
            allow="xr-spatial-tracking">
          </iframe>
    <div className="card-body">
      <h4 className="text-center title">Dollhouse</h4>
      <p className="card-text">The dollhouse view is the crown jewel of Matterport's 3D space exploration, offering an unparalleled bird's eye perspective that instantly captures the layout and dimensions of any property.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>

    </div>
  </div>
  <div className="card text-center">
  <iframe 
            width="100%" 
            height="400" 
            src="https://my.matterport.com/show/?m=nFXjkP6meiR" 
            frameborder="0" 
            allowfullscreen 
            allow="xr-spatial-tracking">
          </iframe>
    <div className="card-body">
    <h4 className="text-center title">Highlight Reels</h4>
      <p className="card-text">You create a slideshow of destinations within the space, guiding users from view to view</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>

    </div>
  </div>
  <div className="card text-center">
  <iframe 
            width="100%" 
            height="400" 
            src="https://my.matterport.com/show/?m=nFXjkP6meiR" 
            frameborder="0" 
            allowfullscreen 
            allow="xr-spatial-tracking">
          </iframe>
    <div className="card-body">
      <h4 className=" title">360 Photos</h4>
      <p className="card-text">Listings that feature 3D tours stand out in crowded real estate markets. They signal to buyers that the agent or seller is employing the latest technology to provide the best possible buying experience.</p>
      <a href="#" class="btn btn-primary text-center">Go somewhere</a>

    </div>
  </div>
</div>
      </Row>
      <p className='whatsIncluded'>
        <h4>What’s Included:</h4>
        <ul >
        <li >3D Virtual Tour links to promote your space online</li>
        <li>QR Code to add your 3D Virtual Tour to your printed materials</li>
        <li>Social Media folder with 360 views and more</li>
        <li>6 months of FREE cloud hosting</li>
          
        </ul>
       </p>
    </div>
  );
};

export default EssentialFeatures;
