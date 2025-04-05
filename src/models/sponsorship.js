const mongoose = require('../configuration/dbConfig');

const sponsorshipSchema = new mongoose.Schema({
    name: String,
    address: String,
    amount: Number,
    remarks: String,
    photo: {
        type: String, // Path to the uploaded photo
    },
    status: {
        type: String,
        enum: ['pending', 'approved'], // Status can be 'pending' or 'approved'
        default: 'pending'
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Sponsorship', sponsorshipSchema);