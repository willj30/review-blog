const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Movie = model('Movie', movieSchema);

module.exports = Movie;
