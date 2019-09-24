const {start, server}= require('./lib/server');
require('dotenv').config();

let PORT = process.env.PORT || 8080;

start(PORT);
