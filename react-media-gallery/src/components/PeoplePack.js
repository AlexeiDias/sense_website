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
        <li>3D Virtual Tour + links to promote your space online</li>
        <li >Production</li>
        <li >Editing</li>
        <li >Openhaus</li>
        <li>QR Code to add your 3D Virtual Tour to your printed materials</li>
        <li>Social Media folder with 360 views and more</li>
        <li id='people-pricing'>6 months of FREE cloud hosting</li>
          
        </ul>
       </p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  <div className="card-footer text-body-secondary">
  <p className="card-text">Up. To 30 Scanns - $249?</p>
  
  </div>
</div>
      
      
    </div>
    
  );
};

export default PeoplePack;
