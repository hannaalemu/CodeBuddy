'use strict';

const express = require ('express');
const app = express();

const cors = require ('cors');
const superagent= require ('superagent');
const morgan = require('morgan');

app.use(cors);
app.use(superagent);
app.use(morgan('dev'));

//Hanna - this attaches the request to the body
app.use(express.json());

module.exports = {
    server: app,
    start: (port) => {
        const PORT = port || process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`HELLO, server is up on ${PORT}`);
        });
    },
};




