const mongoose = require('mongoose');
const Schema = mongoose.Schema



const commentSchema = new Schema({
    content: {type: String, required: true},
    rating: {type: Number, min: 1, max: 5, default: 5},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });

const snackSchema = new Schema({
    name: {type: String, required: true},
    kind: {type: String, required: true},
    rating: {type: Number, min: 1, max: 10, required: true},
    comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Snack', snackSchema)