const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Middlewares

app.use(express.json());
app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// Routes
const server = () => {
    db()
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}

server();