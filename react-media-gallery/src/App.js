import React, { useState } from 'react';
import CustomNavbar from './components/Navbar';
import SecondaryNavbar from './components/SecondaryNavbar';
import VideoJumbotron from './components/VideoJumbotron'; // Import the new Jumbotron component
import AboutUsText from './components/AboutUsText'; // Import the new text area component

import Business from './components/IndustriesIntro';
import Hospitality from './components/Hospitality'
import RealState from './components/RealState';
import RealStateHighLights from './components/RealStateHighLights';
import DevelopmentProcess from './components/DevelopmentProcess';
import EssentialFuture from './components/EssentialFuture';
import RealStatePack from './components/RealStatePack';
import BusinessPack from './components/BusinessPack';
import VirtualStorePack from './components/VirtualStorePack';
import PeopleComponent from './components/PeopleComponent';
import PeoplePack from './components/PeoplePack';
import HospitalityHighLights from './components/HospitalityHighLights'
import PeopleHighLights from './components/PeopleHighLights';
import EssentialsTitle from './components/EssentialsTitle';
import ResidentialPricingTitle from './components/ResidentialPricingTitle';
import BusinessPackTitle from './components/BusinessPackTitle';
import VirtualStoreTitle from './components/VirtualStoreTitle';
import PeopleScanningTitle from './components/PeopleScanningTitle';
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



function App() {
  const [activeGallery, setActiveGallery] = useState('photo');

  return (
    <div className="App">
      <CustomNavbar />
      <SecondaryNavbar />
      <VideoJumbotron />
      <AboutUsText /> {/* Include the About Us text area here */}
     
     
    
      <IndustriesIntro />
      <Retail />
      <RetailHighLights />
      <RetailPack />
      <RealState />
      <RealStateHighLights />
      <RealStatePack />
      <MuseumsGalleries />
      <MuseumsGalleriesHighLights />
      <Hospitality />
      <HospitalityHighLights />
      <EventVenues />
      <EventVenuesHighLights />
      <Tourism />
      <TourismHighLights />
      <FitnessSpa />
      <FitnessSpaHighLights />
      <Automotive />
      <AutomotiveHighLights />
      <ConstructionArchitecture />
      <ConstructionArchitectureHighLights />
      <Education />
      <EducationHighLights />
      <PeopleComponent />
      <PeopleHighLights />
      <PeoplePack />
      <DevelopmentProcess />
      <EssentialsTitle />
      <EssentialFuture />
      <ResidentialPricingTitle />
      
      <BusinessPackTitle />
      <BusinessPack />
      <VirtualStoreTitle />
      <VirtualStorePack />
      <PeopleScanningTitle />
     
      <IndividualServicesPricingTitle />
      <IndividualServicesPricing />
      
      <Footer />
      {/* Other components */}
    </div>
  );
}

export default App;
