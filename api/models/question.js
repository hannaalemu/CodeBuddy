const mongoose = require('mongoose');

const question = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    hints: {
        type: Array,
        required: false,
    },
    solutions: {
        type: Array,
        required: false,
    },
    tag: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model('Question', question);

