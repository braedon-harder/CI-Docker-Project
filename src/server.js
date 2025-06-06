const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World! This is a simple Express server.');
    });

// Set the server to listen on port 3000

app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');

});