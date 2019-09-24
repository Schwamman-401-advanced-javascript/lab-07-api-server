# LAB - 07

## LAB: Express

### Author: Jonathon Schwamman, Calvin Hall, Jacob Swenson

### Links and Resources
* [submission PR](https://github.com/Schwamman-401-advanced-javascript/lab-07-api-server/pull/1)
* [travis](https://www.travis-ci.com/Schwamman-401-advanced-javascript/lab-07-api-server)

#### Documentation
* [jsdoc](http://xyz.com) (Server assignments)

### Modules
#### `category-routes.js`
##### Exported Values and Methods

###### `postCategory()`
Returns an object containing all categories

###### `getCategory()`
Creates a new category and adds to database

#### `server.js`
###### `start(port) -> number`
Starts server on passed in port

###### `app`
The express serverr

### Setup
* npm install
#### `.env` requirements
* `PORT` - 3002


#### Running the app
* `npm start`
* Endpoint: `/category/`
  * GET: Returns an object containing all categories
  `{"count":1,"results":[{"name":"Blues Clues","id":0.17811889454571106,"valid":true}]}`
  * POST: Creates a new category and adds to database
  
#### Tests
* How do you run tests?
`npm test`
* What assertions were made?
* What assertions need to be / should be made?

#### UML
* [whiteboard](./docs/whiteboards_lab07.jpg)
