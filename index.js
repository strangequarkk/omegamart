const express = require('express');
const connectDB = require('./config/db');
const router = require('./routes/main.js');

const app = express();

// Connect Database
connectDB();

app.use(router);

//app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));