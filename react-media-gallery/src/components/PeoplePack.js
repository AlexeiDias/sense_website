import React from 'react';
import {Row} from 'react-bootstrap';
import './WhatsIncluded.css';

const PeoplePack = () => {
  return (
    <div className="CommercialPricing">
  <div className="card text-center">
  <div className="card-header">
  

  </div>
  <div className="card-body">
    <h5 className="card-title">People Pack
</h5>
<p className='whatsIncluded'>
        <h4>What’s Included:</h4>
        <ul>
        <li >3D Virtual Tour + links to promote your space online</li>
        <li > HIGH RES PHOTOS</li>
        <li >3 Mattertags </li>
        <li >GOOGLE STREET VIEW</li>
        <li>QR Code to add your 3D Virtual Tour to your printed materials</li>
        <li>Social Media folder with 360 views and more</li>
        <li id="commercial-real-state">6 months of FREE cloud hosting</li>
        <li>Add: Production and Editing to ensure high-quality content for blogs and social media.</li>  
        <li></li>
        <li>Up. To 30 Scanns + $9 for each additional scanns</li>
        </ul>
       </p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  <div className="card-footer text-body-secondary">
  <h5 className="card-text">Price: Custom, based on production and editing needs. Suggest starting at $499+ depending on scope.</h5>
  
  </div>
</div>
      
      
    </div>
    
  );
};

export default PeoplePack;
