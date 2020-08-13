import React from 'react';
import {
  SmallPhotoDiv,
  StyledSmallPhoto,
  SmallPhotoIndex
} from './Style.jsx';

const SmallPhoto = ({ photo, index, openModal, total }) => (
  <SmallPhotoDiv>
    <StyledSmallPhoto
      src={photo.photo_url}
      alt={photo.photo_description}
      onClick={() => openModal()}
    />
    <SmallPhotoIndex
    >{index} / {total}</SmallPhotoIndex>
  </SmallPhotoDiv>
);

export default SmallPhoto;