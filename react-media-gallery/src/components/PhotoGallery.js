import React from 'react';

const photos = [
  // Add your photo URLs here
];

const PhotoGallery = () => {
  return (
    <div className="gallery">
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt={`Gallery item ${index}`} />
      ))}
    </div>
  );
}

export default PhotoGallery;
