const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: String,
    director: String,
    premieredYear: Number,
    img: String,
}, { versionKey: false });

const Movie = mongoose.model('movies', movieSchema);

module.exports = Movie;