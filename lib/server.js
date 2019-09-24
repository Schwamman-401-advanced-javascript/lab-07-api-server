'use strict';
const errorHandler = require('./middleware/error-handler');
const logger = require('./middleware/logger');
const express = require('express');
const timeStamp = require('./middleware/timestamper');
const { getCategory, postCategory } = require('./routes/category-routes');

const app = express();

app.use(express.json());
app.use(timeStamp);
app.use(logger('You just got a message:'));

// Route to Get All Categories
app.get('/categories', getCategory);

// Route to Create a Category
app.post('/categories', postCategory);

app.use('/categories', errorHandler(500));

app.use(errorHandler(404));

// Don't listen if imported into tests
if (!module.parent) {
  let PORT = process.env.PORT || 8080;
  start(PORT);
}

function start(port) {
  app.listen(port, () => console.log(`Listening on ${port}`));
}

module.exports = { start: start, server : app};
