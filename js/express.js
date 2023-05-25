const express = require('express');
const app = express();

app.get('/', function(req, res, next) {
    res.send('최원서');
});

app.listen(3333);