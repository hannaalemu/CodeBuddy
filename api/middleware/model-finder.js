'use strict';

// Hanna - this middleware lets us get the model name from the request url
module.exports = (request, response, next) => {
  const modelName = request.params.model;

  // eslint-disable-next-line import/no-dynamic-require
  request.model = require(`../models/${modelName}`);
  next();
};