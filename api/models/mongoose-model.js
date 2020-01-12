'use strict';

import { get } from "mongoose";

class DataModel {
    constructor(schema) {
        this.schema = schema;
    }


get(tag) {
    const query = tag ? { tag : tag } : {};
    return this.schema.find(query);
}

post(record) {
    console.log('hello from model', record);
    const newRecord = new this.schema(record);
    return newRecord.save();
}

put(id, record) {
    const filter = {_id: id};
    const update = record;

    return this.schema.findOneAndUpdate(filter, record);
}

delete(id) {
    const filter = {_id: id};

    return this.schema.findOneAndRemove(filter);
}
}

module.exports = DataModel;
