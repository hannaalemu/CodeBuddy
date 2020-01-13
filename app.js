'use strict';

// Hanna - import dependecies

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Hanna - import error handling middleware
const notFound = require('./api/middleware/404');
const errorHandler = require('./api/middleware/500');

// Hanna - import all routes
const apiRouter = require('./api/routes/apiRouter');

// Hanna - instantiate app as a express server and use imports


const app = express();

// Hanna - this attaches the request to the body
app.use(express.json());


app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan('dev'));
app.use(apiRouter);

// Hanna - create route for JSDocs
// app.use('/docs', express.static('docs'));

app.use(notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || process.env.port || 8080;
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`HELLO! Server is Up on PORT ${PORT}`);
    });
  },
};