const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/social_media_app', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// const connectDb = mongoose.connection;

// connectDb.on('error', console.error.bind(console, 'Connection error:'));
// connectDb.once('open', () => {
//     console.log('Connected to the database');
// });

const mongoDbUrl = 'mongodb://localhost:27017/social_media_app'
const connectDb = () => {
    return mongoose.connect(mongoDbUrl)
}

module.exports = { connectDb }
