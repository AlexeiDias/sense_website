import React from 'react';
import './AboutUsText.css'; // Make sure to create this CSS file

const AboutUsText = () => {
  return (
    <div className="about-us-text">
      <h2>About Virtual Sense</h2>
      <p>
        At Virtual Sense, we transcend the boundaries of space by crafting state-of-the-art 3D immersive virtual tours. Since our inception in 2018, we've been pioneering virtual exploration, empowering real estate businesses, tourism, and event venues with the ability to showcase their spaces like never before. Our commitment lies in delivering an unparalleled virtual presence that captures the essence and ambiance of physical locations.

With a footprint both in the US and internationally, we pride ourselves on broadening horizons and unlocking potential across the globe. Our team of expert designers and technologists harmonize artistry with innovation to bring distant spaces to your fingertips, offering an engaging and interactive experience that is second to none.

Join us at Virtual Sense, where your next journey is just a click away – no passport required.
        {/* Add the rest of your about us content here */}
      </p>
      {/* More paragraphs as needed */}
    </div>
  );
};

export default AboutUsText;
