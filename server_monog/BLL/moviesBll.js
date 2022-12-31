const Movie = require('../models/movieModel');

/**
 * CRUD Operetions
 */

//Get All Movies

const getAllMovies = () => {
    const moviesData = Movie.find({});
    return moviesData;
}

const getMovieByID = (id) => {
    const movie = Movie.findById(id);
    return movie;
}

//Add new Movie 
const addMovie = async (obj) => {
    const movie = new Movie(obj);
    await movie.save();
    return 'Movie Added Successfully!';
}

//Update Movie 
const updateMovie = async (id, obj) => {
    await Movie.findByIdAndUpdate(id, obj);
    return 'Movie Updated Successfully!';
}

// Delete Movie 

const deleteMovie = async (id) => {
    const res = await Movie.findByIdAndDelete(id);
    return `The Movie ${res} deleted Successfully!`;

}
module.exports = { getAllMovies, getMovieByID, addMovie, updateMovie, deleteMovie }