const db = require('./index.js').connection;

var loremIpsum = 'Lorem ipsum dolor sit amet consectetur adipiscing elit Donec at dui accumsan ipsum lobortis gravida Fusce vitae leo ultricies facilisis nisi ac, gravida eros. Morbi eget eleifend lectus Etiam convallis elit vel convallis laoreet Morbi placerat nunc id quam varius euismod Fusce iaculis nunc a augue tincidunt commodo Aenean interdum feugiat nunc a dignissim Curabitur mollis purus eu vehicula lobortis Donec vel lacus a quam ullamcorper viverra non ac ante Nulla ac hendrerit lorem Donec aliquam elit tortor at porttitor ex varius at Etiam euismod neque non lectus tincidunt et cursus magna ultrices Nullam sit amet mi in ante ornare';

// The part of the URL to my images that will never change
var imageURL = `https://fec-photo-carousel.s3.us-east-2.amazonaws.com/`;

// This function takes a string of Lorem Ipsum words and creates a random phrase between 3 and 7 words
// This will be used to create random listing names, as well as random photo descriptions
var randomDescription = (words) => {
  var wordArray = words.split(' ');
  var description = [];
  var wordCount = Math.floor(Math.random() * (4) + 3);
  for (var i = 0; i < wordCount; ++i) {
    description.push(wordArray[Math.floor(Math.random() * wordArray.length)]);
  }
  description.join(' ');
  return description.join(' ').toLowerCase();
};

// This function will add n listings into the database, with random listing names
var seedListings = (n, callback) => {
  for (let i = 0; i < n; ++i) {
    db.query(`INSERT INTO listings (listing_name) VALUES ("${randomDescription(loremIpsum)}");`, (err) => {
      if (err) {
        console.log(`Error seeding listings table: ${err}`);
      } else {
        if (i === n - 1) {
          callback();
        }
      }
    });
  }
};

// This is a helper function to add one photo to the database
var addOnePhoto = (listingId, callback) => {
  let randomId = Math.floor((Math.random() * 40) + 1);
  let queryString = `INSERT INTO photos (photo_url, photo_description, listing_id) VALUES ("${imageURL}${randomId}.jpeg", "${randomDescription(loremIpsum)}", "${listingId}");`;
  db.query(queryString, (err) => {
    if (err) {
      console.log(`Error adding a photo: ${err}`);
    } else {
      callback(err);
    }
  });
};

// This function will add between 5 and 10 photos, per listing, to the database
var seedPhotos = (n, callback) => {
  var randomNumber;
  for (let i = 1; i <= n; ++i) {
    randomNumber = Math.floor(Math.random() * (5) + 5);
    for (let j = 0; j < randomNumber; ++j) {
      addOnePhoto(i, (err) => {
        if (err) {
          console.log(`Error seeding photos: ${err}`);
        } else if (i === n && j === randomNumber - 1) {
          callback();
        }
      });
    }
  }
};

// This function seeds the database with n primary records
var seedDatabase = (n, callback = () => {}) => {
  seedListings(n, (err) => {
    if (err) {
      console.log(`Error seeding database: ${err}`);
    } else {
      seedPhotos(n, (err) => {
        if (err) {
          console.log(`Error seeding database: ${err}`);
        } else {
          console.log('Database seeding complete!');
          callback();
        }
      });
    }
  });
};

seedDatabase(100);

module.exports = {
  seedDatabase
};