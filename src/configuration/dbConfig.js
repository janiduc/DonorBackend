// const mongoose = require('mongoose');

// //mongoose.connect('mongodb://172.29.24.70:27017/jwt_db');
// mongoose.connect('mongodb+srv://janiduillesinghe:C0xV1F4F9GqiSDh7@cluster0.dmrszqo.mongodb.net/jwt_db?retryWrites=true&w=majority');

// mongoose.connection.on('connected', () => {
//     console.log('Connected to MongoDB');
// });

// mongoose.connection.on('error', (err) => {
//     console.log('Error in connection to MongoDB: ' + err);
// });

// filepath: d:\MSc. IT\JWTnode\src\configuration\dbConfig.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://janiduillesinghe:C0xV1F4F9GqiSDh7@cluster0.dmrszqo.mongodb.net/jwt_db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.log('Error in connection to MongoDB: ' + err);
});

module.exports = mongoose;
