const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

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