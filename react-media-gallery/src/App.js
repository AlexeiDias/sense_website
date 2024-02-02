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
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PeopleComponent from './components/PeopleComponent';

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
      {/* Other components */}
    </div>
  );
}

export default App;
