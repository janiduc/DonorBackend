const mongoose = require('../configuration/dbConfig');

const childrenSchema = new mongoose.Schema({
    childID: String,
    name: String,
    birthDate: Date,
    address: String,
    age: Number,
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Reference to the User model
    },
    guardienName: String,
    contactNumber: String
});

module.exports = mongoose.model('Children', childrenSchema);