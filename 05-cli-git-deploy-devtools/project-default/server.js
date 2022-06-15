const express = require('express');
const app = express();
const porta = process.env.PORT || 8080

app.use(express(__dirname + '/dist/'))

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/dist/index.html');
})

app.listen(porta, function() {
    console.log('running server');
})