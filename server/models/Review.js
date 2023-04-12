const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const omdbAPI = require('../utils/API');


const reviewSchema = new Schema({
  omdbID: {
    type: String,
    // required: true
  },
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

const Review = model('Review', reviewSchema);

module.exports = Review;
