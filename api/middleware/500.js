'use strict';

module.exports = (request, response, next) => {
    response.status(500);
    response.send({ Error: 'Something went wrong!'});
};