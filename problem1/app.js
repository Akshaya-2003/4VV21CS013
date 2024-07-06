const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/config');
const productsRoutes = require('./routes/routes');


require('dotenv').config();

const app = express();


connectDB();


app.use(cors());
app.use(bodyParser.json());


app.use('/api', productsRoutes);

module.exports = app;
