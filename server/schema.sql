CREATE DATABASE photo_carousel;

USE photo_carousel;

CREATE TABLE listings (
  id INT NOT NULL AUTO_INCREMENT,
  listing_url VARCHAR(2083),
  PRIMARY KEY (id)
);

CREATE TABLE photos (
  id INT NOT NULL AUTO_INCREMENT,
  photo_url VARCHAR(2083),
  listing_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (listing_id) REFERENCES listings(id)
);