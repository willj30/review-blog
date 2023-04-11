const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const criticSchema = new Schema({
  ReviewText: {
    type: String,
    required: 'You need to leave a Review!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
ReviewAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Critic = model('Critic', criticSchema);

module.exports = Critic;
