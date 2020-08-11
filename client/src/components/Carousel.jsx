import React from 'react';
import { CarouselContainer, DisplayedImage, ArrowButton, ImageIndex, CloseButton } from './Style.jsx';
import css from './style.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhoto: this.props.currentPhoto
    };
  }

  handleBack() {
    this.setState({
      currentPhoto: this.state.currentPhoto - 1
    });
  }

  handleForward() {
    this.setState({
      currentPhoto: this.state.currentPhoto + 1
    });
  }

  render() {
    var photos = this.props.photos;
    var index = this.state.currentPhoto - 1;
    var currentPhoto = photos[index];
    return (
      <div>
        <ImageIndex>{index + 1} / {photos.length}</ImageIndex>
        <br />
        <div
          className={css.Heart}
        >
          <FontAwesomeIcon
            icon={faHeart}
          />
        </div>
        <CarouselContainer>
          <CloseButton
            onClick={() => this.props.closeModal()}
          >X Close</CloseButton>
          <ArrowButton
            style={{ display: index === 0 ? 'none' : 'inline-block' }}
            onClick={this.handleBack.bind(this)}
          >{'<'}</ArrowButton>
          <DisplayedImage
            className="current-photo"
            src={currentPhoto.photo_url}
            alt={currentPhoto.photo_url}
          />
          <ArrowButton
            style={{ display: index + 1 === photos.length ? 'none' : 'inline-block' }}
            onClick={this.handleForward.bind(this)}
            forward="true"
          >{'>'}</ArrowButton>
        </CarouselContainer>
      </div>
    );
  }

}

export default Carousel;