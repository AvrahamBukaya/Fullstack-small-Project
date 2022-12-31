const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const moviesRouter = require('./routers/moviesRouter');

const port = '4000';

// Connect to DB
connectDB();


/**
 * Initilize express instance
 */
const app = express();

/**
 * Middlewares
 */

// Cors Handle
app.use(cors());

// converting the body request to json obj 
app.use(express.json());

//Define Routes
app.use('/movies', moviesRouter);


/**
 * Call the server to listenning to request on port 4000
 */
app.listen(port, () => {
    console.log(`Host name: http://localhost is listenning on port: ${port}`);
})