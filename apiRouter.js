'use strict';

const express = require('express');
const apiRouter = express.Router();

apiRouter.get('/', handleGetAll);
apiRouter.get('/:category', handleGetByCategory);


function handleGetAll(request, response, next) {
    console.log('getall');
    response.status(200).json('Working get all')
  }

function handleGetByCategory(request, response, next) {
    console.log('get by category');
    const { category } = request.params;
    request.model.get(category)
        .then((results) => response.send(results))
        .catch(next);
}

module.exports = apiRouter;