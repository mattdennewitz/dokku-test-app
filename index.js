const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.write('hello');
    res.end();
});

app.listen(8000, function () {
    console.log('localhost:8000');
});
