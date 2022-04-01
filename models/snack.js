const mongoose = require('mongoose');
const Schema = mongoose.Schema

const snackSchema = new Schema({
    name: {type: String, required: true},
    kind: {type: String, required: true},
    rating: {type: Number, min: 1, max: 10, required: true}
}, {
    timestamps: true
});

module.exports = mongoose.model('Snack', snackSchema)