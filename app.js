'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const notFound = require('./api/middleware/404')
const errorHandler = require('./api/middleware/500');

const apiRouter = require('./api/routes/apiRouter');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan('dev'));

app.use(apiRouter);


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
