require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const router = require('./routes/main.js');
const bodyParser = require("body-parser");
const cors = require('cors');


const app = express();

// Connect Database
connectDB();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // parse application/json
//app.use(express.urlencoded({ extended:true }));
app.use(cors());
//app.use(express.json());
app.use(router);


const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));