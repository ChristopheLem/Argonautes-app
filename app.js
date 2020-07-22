const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const connectDB = require('./db/connect')

connectDB();

const app = express();

app.use(express.json());

module.exports = app;



