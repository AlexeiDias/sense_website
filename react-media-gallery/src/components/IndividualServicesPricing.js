import React from 'react';
import {Row} from 'react-bootstrap';
import './Styles.css';


const IndividualServicesPricing = () => {
  return (
    <div className="container-margin-top-bottom" id='individual-pricing'>
  <div className="card text-center">
  <div className="card-header">
  

  </div>
  <div className="card-body">
    <h5 className="card-title">Individual Services Pricing 
</h5>
<p className='whatsIncluded'>
       
        <ul>
        <li>3D Virtual Tour (Interior)        $199 (up to 2,000 SF + $100 per each 1,000 SF)</li>
        <li >HDR Photos ( up to 30 photos )   $199 (up to 2,000 SF + $100 per each 1,000 SF)</li>
        <li>Floor Plan                        $ 50 (room labels & square footage)</li>
        <li>Single Listing Website            $ 50 (+$30 for custom web domain)</li>
        <li>Promo Video                       $ 99</li>
        <li>Mattertags                        $  5 each</li>
        <li id='people-pricing'>Extended Cloud Hosting – $99/6months or $149/year
</li>
          
        </ul>
       </p>
    {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
  </div>
  <div className="card-footer text-body-secondary">
  
  </div>
</div>
      
      
    </div>
    
  );
};

export default IndividualServicesPricing;
