import React, { useState } from 'react';
import NavTop from './components/NavTop';


import VideoJumbotron from './components/VideoJumbotron'; // Import the new Jumbotron component
import WhatWeDo from './components/WhatWeDo'; // Import the new text area component


import Hospitality from './components/Hospitality'
import RealState from './components/RealState';
import RealStateHighLights from './components/RealStateHighLights';
import DevProcTitle from './components/DevelopmentProcessTitle';
import DevelopmentProcess from './components/DevelopmentProcess';
import EssentialFuture from './components/EssentialFuture';



import PeopleComponent from './components/PeopleComponent';

import HospitalityHighLights from './components/HospitalityHighLights'
import PeopleHighLights from './components/PeopleHighLights';
import EssentialsTitle from './components/EssentialsTitle';
import Footer from './components/Footer';


import Retail from './components/Retail';
import MuseumsGalleries from './components/MuseumsGalleries';
import RetailHighLights from './components/RetailHighLights';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import IndustriesIntro from './components/IndustriesIntro';
import MuseumsGalleriesHighLights from './components/MuseumsGalleriesHighLights';
import EventVenues from './components/EventVenues';
import EventVenuesHighLights from './components/EventVenuesHighLights';
import Tourism from './components/Tourism';
import TourismHighLights from './components/TourismHighLights';
import FitnessSpa from './components/FitnessSpas';
import FitnessSpaHighLights from './components/FitnessSpaHighLights'
import Automotive from './components/Automotive';
import AutomotiveHighLights from './components/AutomotiveHighLights';
import ConstructionArchitecture from './components/ConstructionArchitecture';
import ConstructionArchitectureHighLights from './components/ConstructionArchitectureHighLights';
import Education from './components/Education';
import EducationHighLights from './components/EducationHighLights';









import AboutUs from './components/AboutUs';



function App() {
  const [activeGallery, setActiveGallery] = useState('photo');

  return (
    <div className="App">
      {/* Include NavBar and Navigation here*/}
      
   
      <NavTop />
      {/* Include the Main video here */}
      <VideoJumbotron />
      {/* Include the About Us text area here */}
      <WhatWeDo /> 
      {/* Include Development area here */}
      <DevProcTitle />
      <DevelopmentProcess />
     {/* Include the text for the industries introduction here */}
      <IndustriesIntro />
      {/* Include Retail area here */}
      <Retail />
      <RetailHighLights />
     
      {/* Include Real State area here */}
      <RealState />
      <RealStateHighLights />
     
      {/* Include Museum and Galleries area here */}
      <MuseumsGalleries />
      <MuseumsGalleriesHighLights />
     
      {/* Include Hospitality area here */}
      <Hospitality />
      <HospitalityHighLights />
     
      {/* Include Real State area here */}
      <EventVenues />
      <EventVenuesHighLights />
     
      {/* Include Tourism area here */}
      <Tourism />
      <TourismHighLights />
    
      {/* Include Fitness and Spa area here */}
      <FitnessSpa />
      <FitnessSpaHighLights />
     
      {/* Include Automotive area here */}
      <Automotive />
      <AutomotiveHighLights />
    
      {/* Include Construction and Architecture area here */}
      <ConstructionArchitecture />
      <ConstructionArchitectureHighLights />
     
      {/* Include Education area here */}
      <Education />
      <EducationHighLights />
     
      {/* Include People Component area here */}
      <PeopleComponent />
      <PeopleHighLights />
    
      
      {/* Include Essentials area here */}
      <EssentialsTitle />
      <EssentialFuture />
       {/* Include testimonies area here */}
      
      {/* Include AboutUs area here */}
      <AboutUs />
      {/* Include Footer area here */}
      <Footer />
      {/* Other components */}
    </div>
  );
}

export default App;
