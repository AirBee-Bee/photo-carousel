import React from 'react';
import ReactModal from 'react-modal';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      showModal: false
    };
  }

  componentDidMount() {
    var id = 2; // This will eventually need to point to the listing id in the URL
    this.fetchPhotos(id);
    ReactModal.setAppElement('body');
  }

  fetchPhotos(listingId) {
    $.ajax({
      method: 'GET',
      url: `/listing/${listingId}`,
      success: photos => {
        this.setState({
          photos,
          showModal: false
        });
      },
      error: err => {
        console.log(err);
      }
    });
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    var images = this.state.photos.slice(0, 5);
    return (
      <div>
        {images.map((image, index) => (
          <img
            src={image.photo_url}
            alt={image.photo_description}
            key={index}
            onClick={this.handleOpenModal.bind(this)}
          />
        ))}
        <ReactModal
          isOpen={this.state.showModal}
        >
          <button
            onClick={this.handleCloseModal.bind(this)}
          >Close</button>
        </ReactModal>
      </div>
    );
  }
}

export default App;