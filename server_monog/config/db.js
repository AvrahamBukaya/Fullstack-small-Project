const mongoose = require('mongoose');

const connetDB = () => {
    mongoose.connect('mongodb://localhost:27017/moviesDB')
        .then(() => console.log('conneted successfully to moviesDB DB via Mongo'))
        .catch(err => console.log(`Error occured whereas connecting to DB: ${err}`));
}


module.exports = connetDB;