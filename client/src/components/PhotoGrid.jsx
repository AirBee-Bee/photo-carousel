import React from 'react';
import { SmallPhotoGrid, SmallGridPhoto } from './Style.jsx';

const PhotoGrid = ({ photos }) => (
  <div style={{ 'overflow': 'scroll', 'height': '100%' }}>
    <SmallPhotoGrid>
      {photos.map((photo, index) => (
        <SmallGridPhoto
          src={photo.photo_url}
          alt={photo.photo_description}
          big={(index) % 3 === 0}
        />
      ))}
    </SmallPhotoGrid>
  </div>
);

export default PhotoGrid;