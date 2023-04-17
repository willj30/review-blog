const mongoose = require('mongoose');
const { Schema } = mongoose;

const donationSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    products: [
        price: {
            type: Number,
            required: true,
            min: 0.99
          },
    ]
});
const Donate = mongoose.model('donation', donationSchema);

module.exports = Donate;