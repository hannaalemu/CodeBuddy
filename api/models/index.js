'use strict';

const questionSchema = require('./question');

const MongooseModel = require('./mongoose-model');

class Questions extends MongooseModel{};

module.exports = new Questions(questionSchema);