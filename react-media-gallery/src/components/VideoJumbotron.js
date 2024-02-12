import React from 'react';
import './VideoJumbotron.css'; // Make sure to create this CSS file

const VideoJumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <video className="jumbotron-video" width="100%" autoPlay loop muted>
          <source src="/552.mp4" type="video/mp4" />
          
        </video>
      </div>
    </div>
  );
};

export default VideoJumbotron;
