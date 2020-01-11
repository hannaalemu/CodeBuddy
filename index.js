'use strict';

const mongoose = require ('mongoose');

const App = require ('./app.js');

require('dotenv').config();

const MONGOOSE_URI='mongodb+srv://hanna9:estifaman9@cluster0-s90so.mongodb.net/test?retryWrites=true&w=majority'


//Hanna - connect to DB

mongoose.connect(MONGOOSE_URI, {
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//Hanna - start server on port

App.start(process.env.PORT || 8080);