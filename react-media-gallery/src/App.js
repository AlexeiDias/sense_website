import React, { useState } from 'react';
import CustomNavbar from './components/Navbar';
import SecondaryNavbar from './components/SecondaryNavbar';
import VideoJumbotron from './components/VideoJumbotron'; // Import the new Jumbotron component
import AboutUsText from './components/AboutUsText'; // Import the new text area component
import CardGroupComponent from './components/CardGroupComponent';
import TwoColumnComponent from './components/TwoColumnComponent';
import ResidentialComponent from './components/ResidentialComponent';
import BusinessComponent from './components/BusinessComponent';
import DevelopmentProcess from './components/DevelopmentProcess';
import EssentialFuture from './components/EssentialFuture';
import ResidentialPricing from './components/ResidentialPricing';
import CommercialPricing from './components/CommercialPricing';
import BusinessPricing from './components/BusinessPricing';
import PeopleComponent from './components/PeopleComponent';
import PeoplePricing from './components/PeoplePricing';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  const [activeGallery, setActiveGallery] = useState('photo');

  return (
    <div className="App">
      <CustomNavbar />
      <SecondaryNavbar />
      <VideoJumbotron />
      <AboutUsText /> {/* Include the About Us text area here */}
      <CardGroupComponent />
      <TwoColumnComponent />
      <ResidentialComponent />
      <BusinessComponent />
      <PeopleComponent />
      <DevelopmentProcess />
      <EssentialFuture />
      <ResidentialPricing />
      <CommercialPricing />
      <BusinessPricing />
      <PeoplePricing />
      {/* Other components */}
    </div>
  );
}

export default App;
