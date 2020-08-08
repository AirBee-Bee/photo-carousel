import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhoto: this.props.currentPhoto,
      photos: []
    };
  }

  handleBack() {
    this.setState({
      currentPhoto: this.state.currentPhoto - 1,
      photos: this.state.photos
    })
  }

  handleForward() {
    this.setState({
      currentPhoto: this.state.currentPhoto + 1,
      photos: this.state.photos
    })
  }

  render() {
    var photos = this.state.photos;
    var index = this.state.currentPhoto - 1;
    var currentPhoto = photos[index];
    return (
      <div id="carousel-container">
        <p>{index + 1} / {photos.length}</p>
        <br />
        <div id="carousel">
          <button
            id="back-btn"
            onClick={this.handleBack.bind(this)}
          ><</button>
          <img
            class="current-photo"
            src={currentPhoto.photo_url}
            alt={currentPhoto.photo_url}
          />
          <button
            id="forward-btn"
            onClick={this.handleForward.bind(this)}
          >></button>
        </div>
      </div>
    );
  }

}