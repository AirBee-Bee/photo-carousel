import React from 'react';
import ReactModal from 'react-modal';
import Carousel from './Carousel.jsx';
import $ from 'jquery';
import styled from 'styled-components';
import { GlobalStyle, MainContainer, Image, ShowPhotosButton } from './Style.jsx';
import css from './style.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      showModal: false,
      currentPhoto: 1
    };
  }

  componentDidMount() {
    var url = window.location.pathname;
    this.fetchPhotos(url);
    ReactModal.setAppElement('body');
  }

  fetchPhotos(url) {
    $.ajax({
      method: 'GET',
      url: `${url}/photos`,
      success: photos => {
        this.setState({
          photos,
          showModal: false,
          currentPhoto: 1
        });
      },
      error: err => {
        console.log(err);
      }
    });
  }

  handleOpenModal(i) {
    this.setState({
      showModal: true,
      currentPhoto: i + 1
    });
  }

  handleCloseModal() {
    this.setState({
      showModal: false,
      currentPhoto: 1
    });
  }

  render() {
    var images = this.state.photos.slice(0, 5);
    return (
      <div>
        <GlobalStyle />
        <MainContainer
          count={images.length}
        >
          {images.map((image, index) => (
            <Image
              id={`img-${index + 1}`}
              src={image.photo_url}
              alt={image.photo_description}
              key={index}
              onClick={this.handleOpenModal.bind(this, index)}
              primary={index === 0}
              count={images.length}
            />
          ))}
          <ShowPhotosButton
            onClick={this.handleOpenModal.bind(this, 0)}
          >Show all photos</ShowPhotosButton>
          <ReactModal
            className={this.state.showModal ? css.ReactModal : css.ModalLeave}
            overlayClassName={css.Overlay}
            closeTimeoutMS={500}
            isOpen={this.state.showModal}
          >
            <Carousel
              closeModal={this.handleCloseModal.bind(this)}
              photos={this.state.photos}
              currentPhoto={this.state.currentPhoto}
            />
          </ReactModal>
        </MainContainer>
      </div>
    );
  }
}

export default App;