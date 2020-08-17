# Project Name

> This repository contains the component to be rendered to the AirBee&Bee page that will display photos for each listing, as well as an interactive carousel for toggling through those photos.

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
1. run "mysql -u root server/schema.sql" to create the database
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

