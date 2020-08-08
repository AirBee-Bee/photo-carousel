import React from 'react';

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
      <div id="carousel-container">
        <p>{index + 1} / {photos.length}</p>
        <br />
        <div id="carousel">
          <button
            id="back-btn"
            style={{ display: index === 0 ? "none" : "inline-block" }}
            onClick={this.handleBack.bind(this)}
          >{'<'}</button>
          <img
            className="current-photo"
            src={currentPhoto.photo_url}
            alt={currentPhoto.photo_url}
          />
          <button
            id="forward-btn"
            style={{ display: index + 1 === photos.length ? "none" : "inline-block" }}
            onClick={this.handleForward.bind(this)}
          >{'>'}</button>
        </div>
      </div>
    );
  }

}

export default Carousel;