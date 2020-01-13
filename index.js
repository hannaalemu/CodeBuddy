'use strict';

const mongoose = require ('mongoose');

const App = require ('./app.js');

require('dotenv').config();

const MONGOOSE_URI = 'mongodb://hanna9:estifaman9@cluster0-shard-00-00-s90so.mongodb.net:27017,cluster0-shard-00-01-s90so.mongodb.net:27017,cluster0-shard-00-02-s90so.mongodb.net:27017/jobbing?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';

//Hanna - connect to DB

mongoose.connect(MONGOOSE_URI, {
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//Hanna - start server on port

App.start(process.env.PORT || 8080);