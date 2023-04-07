const { Schema, model } = require('mongoose');

const criticSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

const Critic = model('Critic', criticSchema);

module.exports = Critic;
