import React, { useState } from 'react';
import NavTop from './components/NavTop';


import VideoJumbotron from './components/VideoJumbotron'; // Import the new Jumbotron component
import AboutUsText from './components/AboutUsText'; // Import the new text area component


import Hospitality from './components/Hospitality'
import RealState from './components/RealState';
import RealStateHighLights from './components/RealStateHighLights';
import DevelopmentProcess from './components/DevelopmentProcess';
import EssentialFuture from './components/EssentialFuture';
import RealStatePack from './components/RealStatePack';


import PeopleComponent from './components/PeopleComponent';
import PeoplePack from './components/PeoplePack';
import HospitalityHighLights from './components/HospitalityHighLights'
import PeopleHighLights from './components/PeopleHighLights';
import EssentialsTitle from './components/EssentialsTitle';
import Footer from './components/Footer';
import IndividualServicesPricingTitle from './components/IndividualServicesPricingTitle';
import IndividualServicesPricing from './components/IndividualServicesPricing';
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
import RetailPack from './components/RetailPack';
import MuseumsGalleriesPack from './components/MuseumsGalleriesPack'
import HospitalityPack from './HospitalityPack';
import EventVenuesPack from './HospitalityPack';
import TourismPack from './TourismPack';
import FitnessSpaPack from './FitnessSpaPack';
import AutomotivePack from './components/AutomotivePack';
import ConstructionArchitecturePack from './components/ConstructionArchitecturePack';
import EducationPack from './components/EducationPack';



function App() {
  const [activeGallery, setActiveGallery] = useState('photo');

  return (
    <div className="App">
      {/* Include NavBar and Navigation here*/}
      
   
      <NavTop />
      {/* Include the Main video here */}
      <VideoJumbotron />
      {/* Include the About Us text area here */}
      <AboutUsText /> 
      {/* Include Development area here */}
      <DevelopmentProcess />
     {/* Include the text for the industries introduction here */}
      <IndustriesIntro />
      {/* Include Retail area here */}
      <Retail />
      <RetailHighLights />
      <RetailPack />
      {/* Include Real State area here */}
      <RealState />
      <RealStateHighLights />
      <RealStatePack />
      {/* Include Museum and Galleries area here */}
      <MuseumsGalleries />
      <MuseumsGalleriesHighLights />
      <MuseumsGalleriesPack />
      {/* Include Hospitality area here */}
      <Hospitality />
      <HospitalityHighLights />
      <HospitalityPack />
      {/* Include Real State area here */}
      <EventVenues />
      <EventVenuesHighLights />
      <EventVenuesPack />
      {/* Include Tourism area here */}
      <Tourism />
      <TourismHighLights />
      <TourismPack />
      {/* Include Fitness and Spa area here */}
      <FitnessSpa />
      <FitnessSpaHighLights />
      <FitnessSpaPack />
      {/* Include Automotive area here */}
      <Automotive />
      <AutomotiveHighLights />
      <AutomotivePack />
      {/* Include Construction and Architecture area here */}
      <ConstructionArchitecture />
      <ConstructionArchitectureHighLights />
      <ConstructionArchitecturePack />
      {/* Include Education area here */}
      <Education />
      <EducationHighLights />
      <EducationPack />
      {/* Include People Component area here */}
      <PeopleComponent />
      <PeopleHighLights />
      <PeoplePack />
      
      {/* Include Essentials area here */}
      <EssentialsTitle />
      <EssentialFuture />
      
     
    
      {/* Include Individual Services area here */}
      <IndividualServicesPricingTitle />
      <IndividualServicesPricing />
      {/* Include Footer area here */}
      <Footer />
      {/* Other components */}
    </div>
  );
}

export default App;
