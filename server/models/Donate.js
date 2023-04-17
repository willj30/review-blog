const mongoose = require('mongoose');
const { Schema } = mongoose;

const donationSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Movie'
        }
    ]
});
const Donate = mongoose.model('donation', donationSchema);

module.exports = Donate;