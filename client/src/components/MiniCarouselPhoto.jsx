import React from 'react';
import {
  SmallPhotoDiv,
  StyledSmallPhoto
} from './Style.jsx';

const SmallPhoto = ({ photo, index }) => (
  <SmallPhotoDiv>
    <StyledSmallPhoto
      src={photo.photo_url}
      alt={photo.photo_description}
    />
  </SmallPhotoDiv>
);

export default SmallPhoto;