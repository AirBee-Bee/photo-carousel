# Project Name

> AirBee&Bee

> This is a project that I worked on during my time at Hack Reactor.
> This repository contains the component to be rendered to the AirBee&Bee page that will display photos for each listing, as well as an interactive carousel for toggling through those photos.
> I hosted the images in S3, and the URL's which reference those images in a MySQL database.
> The front end is served with an Node.js/Express server.

## Related Projects

  - https://github.com/AirBee-Bee/checkin-checkout
  - https://github.com/AirBee-Bee/description-amenities
  - https://github.com/AirBee-Bee/reviews

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

1. run "npm install" to install dependencies
1. run "mysql -u root < server/schema.sql" to create the database schema
1. run "npm run seed-db" to seed the database
1. run "npm run webpack-config" to build the bundle and configure webpack
1. run "npm run server-start" to start the server on port 3000
1. run "npm start" to open the app in your browser

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

