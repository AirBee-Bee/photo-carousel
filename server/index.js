const express = require('express');
const app = express();
const db = require('./database/index.js');
const path = require('path');
const port = 3000;


app.get('/listing/:listingId', (req, res) => {
  if (req.params.listingId === 'bundle.js') {
    res.sendFile('bundle.js', { root: path.join(__dirname, '../public/dist') });
  } else {
    res.sendFile('index.html', { root: path.join(__dirname, '../public/dist') });
  }
});


app.get('/listing/:listingId/photos', (req, res) => {
  var listingId = req.params.listingId;
  db.fetchPhotos(listingId, (err, data) => {
    if (err) {
      console.log(`Error fetching photos from db: ${err}`);
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));