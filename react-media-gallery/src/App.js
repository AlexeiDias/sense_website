import React, { useState } from 'react';
import CustomNavbar from './components/Navbar';
import SecondaryNavbar from './components/SecondaryNavbar'; // Correct this import
import VideoGallery from './components/VideoGallery';
import PhotoGallery from './components/PhotoGallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// ... rest of your App.js code ...


function App() {
  const [activeGallery, setActiveGallery] = useState('photo'); // 'photo' or 'video'

  return (
    <div className="App">
      <CustomNavbar />
      <SecondaryNavbar /> {/* Add SecondaryNavbar here */}
      <header>
        {/* Rest of your code */}
      </header>
      {activeGallery === 'photo' ? <PhotoGallery /> : <VideoGallery />}
    </div>
  );
}

export default App;
