'use strict';

const schema = require('./question');
const MongooseModel = require('../mongoose-model');

class Questions extends MongooseModel { }

module.exports = new Questions(schema);