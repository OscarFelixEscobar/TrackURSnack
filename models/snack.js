const mongoose = require('mongoose');
const Schema = mongoose.Schema

const snackSchema = new Schema({
    name: {type: String, required: true},
    type: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Snack', snackSchema)