import React from 'react';
import {Row} from 'react-bootstrap';
import './Styles.css';
import './RetailPack.css';




const RetailPack = () => {
  return (
    <div className="backGroundImage essential-features align-items-center">
      <Row  className="g-4">
      <div className="card text-center">
  <div className="card-header">
  
  </div>
  <div className="card-body">
    <h5 className="card-title"> Retail Pack

</h5>
<p className='whatsIncluded'>
        <h4>What’s Included:</h4>
        <ul >
        <li >3D Virtual Tour + links to promote your space online</li>
        <li > HIGH RES PHOTOS</li>
       
       
        <li >3 Mattertags ($5 each extra Mattertag)</li>
        <li >GOOGLE STREET VIEW</li>
        <li>QR Code to add your 3D Virtual Tour to your printed materials</li>
        <li>Social Media folder with 360 views and more</li>
        <li id="commercial-real-state">6 months of FREE cloud hosting</li>
        <li>Add: Promo Video to showcase product highlights and special offers.</li>
        <li>Up to 2,000 SF + $100 for each additional 1,000 SF</li> 
        </ul>
       </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div className="card-footer text-body-secondary">
  <h5 className="card-text">Price: $349 (Base services at $199 + Promo Video $99 + $51 for the added value of a tailored retail package)
</h5>
  
  </div>
</div>
      </Row>
      
    </div>
  );
};

export default RetailPack;
