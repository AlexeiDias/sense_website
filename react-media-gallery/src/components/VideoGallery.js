import React from 'react';

const videos = [
  // Add your video URLs here
];

const VideoGallery = () => {
  return (
    <div className="gallery">
      {videos.map((video, index) => (
        <video key={index} controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
}

export default VideoGallery;
