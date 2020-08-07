const mysql = require('mysql');
const dbConfig = require('./config.js');

const connection = mysql.createConnection(dbConfig);

const fetchPhotos = (listingId, callback) => {
  var queryString = `SELECT * FROM photos WHERE listing_id = ${listingId};`;
  connection.query(queryString, (err, data) => {
    if (err) {
      console.log(`Error fetching photos from db: ${err}`);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  connection,
  fetchPhotos
};