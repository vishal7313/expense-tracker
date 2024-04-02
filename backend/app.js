require('dotenv').config();

const PORT = process.env.PORT || 3000;
const server = () => {
    console.log('Server is running on port ', PORT);
    const express = require('express');
    const app = express();
    const port = 3000;

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
}

server();