DROP DATABASE IF EXISTS photo_carousel;

CREATE DATABASE photo_carousel;

USE photo_carousel;

CREATE TABLE listings (
  id INT NOT NULL AUTO_INCREMENT,
  listing_name VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE photos (
  id INT NOT NULL AUTO_INCREMENT,
  photo_url VARCHAR(2083),
  photo_description VARCHAR(255),
  listing_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (listing_id) REFERENCES listings(id)
);