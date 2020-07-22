const express = require('express');
const connectDB = require('./db/connect')
const dotenv = require('dotenv');
const cors = require('cors');
const memberRouter = require('./routers/member')

dotenv.config();
// Connect to Database
connectDB();

const app = express();

app.use(express.json());

// allow CORS
app.use(cors());

// uri & router used
app.use('/api/members', memberRouter)

module.exports = app;