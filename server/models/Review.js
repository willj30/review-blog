const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
  });

const Review = model('Review', reviewSchema);

module.exports = Review;