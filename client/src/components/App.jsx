import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    var listingId = 2; // This will eventually need to point to the listing id in the URL
    $.ajax({
      method: 'GET',
      url: `/listing/${listingId}`,
      success: photos => {
        this.setState({
          photos
        });
      },
      error: err => {
        console.log(err);
      }
    });
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
          />
        ))}
      </div>
    );
  }
}

export default App;