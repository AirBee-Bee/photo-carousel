import React from 'react';
import SmallPhoto from './MiniCarouselPhoto.jsx';
import {
  SnapList,
  SnapItem
} from 'react-snaplist-carousel';

class MiniCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhoto: this.props.currentPhoto
    };
  }

  render() {
    return (
      <SnapList>
        {this.props.photos.map((photo, index) => (
          <SnapItem key={index} snapAlign="center">
            <SmallPhoto photo={photo} />
          </SnapItem>
        ))}
      </SnapList>
    );
  }
}

export default MiniCarousel;