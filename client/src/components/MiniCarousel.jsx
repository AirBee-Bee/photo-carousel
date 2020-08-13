import React from 'react';
import SmallPhoto from './MiniCarouselPhoto.jsx';
import {
  SnapList,
  SnapItem
} from 'react-snaplist-carousel';

const MiniCarousel = ({ photos, openModal }) => (
  <SnapList>
    {photos.map((photo, index) => (
      <SnapItem key={index} snapAlign="center">
        <SmallPhoto
          openModal={openModal}
          photo={photo}
          index={index + 1}
          total={photos.length} />
      </SnapItem>
    ))}
  </SnapList>
);

export default MiniCarousel;