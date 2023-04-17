const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
  imdbID: {
    type: String,
    // required: true
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  // Possibly match model items to imdb info pulled for movies page?
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],
});

const Movie = model('Movie', movieSchema);

module.exports = Movie;
