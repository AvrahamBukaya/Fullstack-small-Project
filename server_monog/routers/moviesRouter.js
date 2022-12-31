const express = require('express');
const moviesBll = require('../BLL/moviesBll');


// Create Router via express package
const router = express.Router();

// Handle diffrent requests


//Get Request Handlers

router.route('/').get(async (req, res) => {
    const data = await moviesBll.getAllMovies();
    res.json(data);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const data = await moviesBll.getMovieByID(id);
    res.json(data);
});


//Post Request Handler
router.post('/', async (req, res) => {
    const body = req.body;
    const result = await moviesBll.addMovie(body);
    res.json(body);
});

//Put Request handler
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const result = await moviesBll.updateMovie(id, body);
    res.json(result);
});

//Delete Request handler
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const result = await moviesBll.deleteMovie(id);
    res.json(result);
});

module.exports = router;
