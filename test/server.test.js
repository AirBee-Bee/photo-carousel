const mysql = require('mysql');
const db = require('../server/database/index.js');

describe('Database seeding', () => {

  test('Database properly seeds', done => {

    var callback = (listingData, photoData) => {
      expect(listingData.length).toBe(100);
      expect(photoData.length).toBeGreaterThan(499);
      expect(photoData.length).toBeLessThan(1001);
      done();
    };

    db.connection.query('SELECT * FROM listings;', (err, listingData) => {
      db.connection.query('SELECT * FROM photos;', (err, photoData) => {
        callback(listingData, photoData);
      });
    });

  });

});

describe('Database querying', () => {

  test('fetchPhotos returns photo entries', done => {
    var callback = data => {
      var value = data.length;
      // Each listing should have between 5 and 10 photos
      expect(value).toBeGreaterThan(4);
      expect(value).toBeLessThan(11);
      done();
    };
    db.fetchPhotos(50, (err, data) => {
      if (err) {
        throw err;
      } else {
        callback(data);
      }
    });
  });

  test('fetchPhotos returns the correct photo(s)', done => {
    var callback = data => {
      var value = data.photo_description;
      expect(value).toBe('TEST_PHOTO');
      done();
    };

    var insertListing = 'INSERT INTO listings (listing_name) VALUES ("TEST");';
    var subQuery = 'SELECT id FROM listings WHERE listing_name = "TEST"';
    var insertPhoto = `INSERT INTO photos (photo_description, listing_id) VALUES ("TEST_PHOTO", (${subQuery}));`;
    var removeListing = 'DELETE FROM listings WHERE listing_name = "TEST";';

    db.connection.query(insertListing, () => {
      db.connection.query(subQuery + ';', (err, data) => {
        var n = data[data.length - 1].id;
        db.connection.query(insertPhoto, () => {
          db.fetchPhotos(n, (err, data) => {
            if (err) {
              throw err;
            } else {
              callback(data[0]);
            }
            db.connection.query(removeListing);
          });
        });
      });
    });
  });

});