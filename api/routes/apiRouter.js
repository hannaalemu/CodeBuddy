'use strict';

const modelFinder = require('../middleware/model-finder');

const express = require('express');
const apiRouter = express.Router();

apiRouter.get('/api/v1/:model', handleGetAll);

apiRouter.post('/api/v1/:model/', handlePost);

apiRouter.get('/api/v1/:model/:tag', handleGetByTag);

apiRouter.put('/api/v1/:model/:id', handlePut);
apiRouter.delete('/api/v1/:model/:id', handleDelete);

apiRouter.param('model', modelFinder);

function handleGetAll(request, response, next) {
    console.log('getall');
    request.model.get()
        .then((results) => {
            response.json(results);
 
        })
        .catch((error) => next(error));
  }

function handleGetByTag(request, response, next) {
    console.log('get by category');
    const { tag } = request.params;
    request.model.get(tag)
        .then((results) => response.json(results))
        .catch((error) => next(error));
}

function handlePost(request, response, next) {
    console.log('request body:', request.model)
    const data = request.body;
    request.model.post(data)
        .then((results) => response.json(results))
        .catch((error) => next(error));
}

function handlePut(request, response, next) {
    const {id} = request.params;
    console.log(id);

    request.model.put(id, data)
        .then((results) => {
            response.json(results)
            response.status = 204
        })
        .catch((error) => next(error));
}

function handleDelete(request, response, next) {
    const {id} = request.params;

    request.model.delete(id)
        .then((results) => {
            response.json(results)
            response.status = 204;
        })
        .catch((error) => next(error));
}

module.exports = apiRouter;