const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./database');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

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
    console.log('Recieved and stored data: ' + recievedData);
    res.send('Data stored successfully!');
});

app.post('/api/accept_room_number', (req, res) => {
    const recievedNumber = req.body.data;
    console.log('Recieved and stored the room number: ' + recievedNumber);
    res.send('room number stored successfully!');
});

app.post('/api/accept_name', (req, res) => {
    const recievedName = req.body.data;
    console.log('Recieved and stored name: ' + recievedName);
    res.send('name is stored successfully!');
});

app.post('/api/accept_email', (req, res) => {
    const recievedEmail = req.body.data;
    console.log('Recived and stored email: ' + recievedEmail);
    res.send('email is stored successfully!');
});

app.post('api/accept_time', (req, res) => {
    const recievedTime = req.body.data;
    console.log('Recieved and stored delivery time: ' + recievedTime);
    res.send('time is stored successfully!');
});

app.post('api/accept_comments', (req, res) => {
    const recievedComment = req.body.data;
    console.log('Recieved and stored comment: ' + recievedComment);
    res.send('comment is stored successfully!');
});