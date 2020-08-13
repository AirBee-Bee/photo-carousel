import React from 'react';
import {
  SmallPhotoDiv,
  StyledSmallPhoto
} from './Style.jsx';

const SmallPhoto = ({ photo, index, openModal }) => (
  <SmallPhotoDiv>
    <StyledSmallPhoto
      src={photo.photo_url}
      alt={photo.photo_description}
      onClick={() => openModal()}
    />
  </SmallPhotoDiv>
);

export default SmallPhoto;