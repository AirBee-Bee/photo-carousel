import React from 'react';
import ReactModal from 'react-modal';
import Carousel from './Carousel.jsx';
import MiniCarousel from './MiniCarousel.jsx';
import PhotoGrid from './PhotoGrid.jsx';
import $ from 'jquery';
import styled from 'styled-components';
import {
  GlobalStyle,
  MainContainer,
  Image,
  ShowPhotosButton,
  SmallContainer
} from './Style.jsx';
import css from './style.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [{ 'photo_url': '', 'photo_description': '' }],
      showModal: false,
      currentPhoto: 1,
      mobileView: false
    };
  }

  componentDidMount() {
    var url = window.location.pathname;
    this.fetchPhotos(url);
    ReactModal.setAppElement('body');
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    var sizeCheck = (window.innerWidth <= 760);
    if (sizeCheck !== this.state.mobileView) {
      this.setState({
        mobileView: sizeCheck,
        showModal: false
      });
    }
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
        throw err;
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
    if (!this.state.mobileView) {
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
    } else {
      return (
        <div>
          <GlobalStyle />
          <SmallContainer>
            <ReactModal
              className={this.state.showModal ? css.ReactModal : css.ModalLeave}
              overlayClassName={css.Overlay}
              closeTimeoutMS={500}
              isOpen={this.state.showModal}
            >
              <PhotoGrid
                photos={this.state.photos}
                modalClose={this.handleCloseModal.bind(this)}
              />
            </ReactModal>
            <MiniCarousel
              photos={this.state.photos}
              currentPhoto={this.state.currentPhoto}
              openModal={this.handleOpenModal.bind(this)}
            />
          </SmallContainer>
        </div>
      );
    }
  }
}

export default App;