import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './PeopleHighLights.css';
import './Styles.css';

const PeopleHighLights = () => {
  // State to control the visibility of the content
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility state
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Container className="my-5">
      <h3 
        className="text-center mb-4 titleColor" 
        onClick={toggleVisibility} 
        style={{ cursor: 'pointer' }}
      >
        Click here for a detailed look at the potential benefits and applications, suggested service pack, and $price.
      </h3>
     
      {/* Conditional rendering based on isVisible state */}
      <div className={isVisible ? 'show' : 'hidden'}>
        <Row>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-bullseye iconColor"></i></h1>
          <h2 className='titleColor'>Realism and Accuracy</h2>
          <p>This realism goes beyond current 2D images and basic 3D models, offering a more immersive and informative shopping experience.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-sunglasses iconColor"></i></h1>
          <h2 className='titleColor'>Virtual Fashion Shows</h2>
          <p>Designers can use 3D scanning and VR to showcase their collections in virtual fashion shows, accessible to a global audience.</p>
        </Col>
        <Col md={4} className="text-center">
        <h1><i class="bi bi-badge-ad-fill iconColor"></i></h1>
          <h2 className='titleColor'>Storytelling</h2>
          <p>Brands can use these technologies to create immersive narratives around their collections, allowing customers to explore the inspiration, design process, and lifestyle associated with their clothing in a more engaging way than traditional media can offer.</p>
        </Col>
        </Row>
        <Row>
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
    </Row>
        
      </div>
      <p>Bring people into Virtual tour models opens up possibilities for exploring themes of nostalgia, the human desire to capture and hold onto fleeting moments, and the implications of technology's role in our personal lives. It could be fascinating to contrast traditional ways of preserving memories (like photo albums and home videos) with this futuristic approach, examining what is gained and what might be lost in the translation from physical to digital.</p>
    </Container>
  );
};

export default PeopleHighLights;
