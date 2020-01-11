'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const apiRouter = require('./apiRouter');

const app = express();


app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan('dev'));
app.use(apiRouter);



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
