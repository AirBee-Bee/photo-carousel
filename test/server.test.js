const mysql = require('mysql');
const db = require('../server/database/index.js');
const seed = require('../server/database/seed.js');

describe('Database seeding', () => {

  test('Database properly seeds', done => {

    var callback = (listingData, photoData) => {
      expect(listingData.length).toBe(100);
      expect(photoData.length).toBeGreaterThan(499);
      expect(photoData.length).toBeLessThan(1001);
      done();
    };

    var dropDB = 'DROP DATABASE IF EXISTS photo_carousel;';
    var createDB = 'CREATE DATABASE photo_carousel;';
    var useDB = 'USE photo_carousel;';
    var createListings = 'CREATE TABLE listings (id INT NOT NULL AUTO_INCREMENT,listing_name VARCHAR(255),PRIMARY KEY (id));';
    var createPhotos = 'CREATE TABLE photos (id INT NOT NULL AUTO_INCREMENT,photo_url VARCHAR(2083),photo_description VARCHAR(255),listing_id INT,PRIMARY KEY (id),FOREIGN KEY (listing_id) REFERENCES listings(id));';

    var resetDB = (cb) => {
      db.connection.query(dropDB, () => {
        db.connection.query(createDB, () => {
          db.connection.query(useDB, () => {
            db.connection.query(createListings, () => {
              db.connection.query(createPhotos, () => {
                cb();
              });
            });
          });
        });
      });
    };

    resetDB(() => {
      seed.seedDatabase(100, () => {
        db.connection.query('SELECT * FROM listings;', (err, listingData) => {
          db.connection.query('SELECT * FROM photos;', (err, photoData) => {
            callback(listingData, photoData);
          });
        });
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
    var insertPhoto = 'INSERT INTO photos (photo_description, listing_id) VALUES ("TEST_PHOTO", 101);';
    var removePhoto = 'DELETE FROM photos WHERE listing_id = 101;';
    var removeListing = 'DELETE FROM listings WHERE listing_name = "TEST";';

    db.connection.query(insertListing, () => {
      db.connection.query(insertPhoto, () => {
        db.fetchPhotos(101, (err, data) => {
          if (err) {
            throw err;
          } else {
            callback(data[0]);
          }
          db.connection.query(removePhoto, () => {
            db.connection.query(removeListing);
          });
        });
      });
    });
  });

});