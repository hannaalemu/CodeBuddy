'use strict';

module.exports = (request, response, next) => {
    response.status(400);
    response.send({Error: 'Sorry, Resource not found. Try again!'});
};