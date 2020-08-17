const express = require('express');
const app = express();
const db = require('./database/index.js');
const path = require('path');
const cors = require('cors');
const port = 3000;

app.use(cors());

app.get('/listing/:listingId', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../public/dist') });
});

app.get('/public/dist/bundle.js', (req, res) => {
  res.sendFile('bundle.js', { root: path.join(__dirname, '../public/dist') });
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