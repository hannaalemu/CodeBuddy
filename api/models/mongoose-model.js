'use strict';

// Hanna  - this file lets us manipulate the mongo db by using methods to CRUD

class DataModel {
  constructor(schema) {
    this.schema = schema;
  } 

  get(tag) {
    const query = tag ? { tag: tag } : {};
    return this.schema.find(query);
  }

  post(record) {
    const newRecord = new this.schema(record);
    return newRecord.save();
  }

  put(id, record) {
    console.log(id);
    const filter = { _id: id };
    const update = record;


    return this.schema.findOneAndUpdate(filter, update);
  }

  delete(id) {
    const filter = { _id: id };
    console.log(filter);
    return this.schema.findOneAndRemove(filter);
  }
}

module.exports = DataModel;