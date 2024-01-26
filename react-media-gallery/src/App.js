import React, { useState } from 'react';
import CustomNavbar from './components/Navbar';
import SecondaryNavbar from './components/SecondaryNavbar';
import VideoJumbotron from './components/VideoJumbotron'; // Import the new Jumbotron component
import AboutUsText from './components/AboutUsText'; // Import the new text area component
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
      {/* Other components */}
    </div>
  );
}

export default App;
