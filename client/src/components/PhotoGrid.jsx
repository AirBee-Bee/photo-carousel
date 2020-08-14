import React from 'react';
import {
  SmallPhotoGrid,
  SmallGridPhoto,
  SmallCloseButton,
  SmallCloseDiv
} from './Style.jsx';

const PhotoGrid = ({ photos, modalClose }) => (
  <div style={{ 'overflow': 'scroll', 'height': '100%' }}>
    <SmallCloseDiv>
      <SmallCloseButton
        onClick={modalClose}
      >{'<'}</SmallCloseButton>
    </SmallCloseDiv>
    <SmallPhotoGrid>
      {photos.map((photo, index) => (
        <SmallGridPhoto
          src={photo.photo_url}
          alt={photo.photo_description}
          big={(index) % 3 === 0}
          key={index}
        />
      ))}
    </SmallPhotoGrid>
  </div>
);

export default PhotoGrid;