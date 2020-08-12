const express = require('express');
const app = express();
const db = require('./database/index.js');
const port = 3000;

app.use(express.static(__dirname + '/../public/dist'));

app.get('/listing/:listingId', (req, res) => {
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