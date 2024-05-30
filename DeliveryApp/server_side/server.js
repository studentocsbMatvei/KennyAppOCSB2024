const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./database');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

let storedData = "";

app.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);
});

app.get('/api/data', (req, res) => {
    const data = {
        message: 'Data from the server'
    };
    res.json(data);
});

app.post('/api/accept_data', (req, res) => {
    const recievedData = req.body.data;
    storedData = recievedData;
    console.log('Recieved and stored data: ' + storedData)
    res.send('Data stored successfully!');
});