var express = require('express');
var tasks = require('./tasks');

var app = express();

app.get('/task', function(req, res) {
    res.json(tasks.findAll());
});

app.get('/task/:id', function(req, res) {
    res.json(tasks.find(req.params.id));
});

app.delete('/task/:id', function(req, res) {
    res.json(tasks.delete(req.param.id));
});

app.put('/task', function(req, res) {
    req.setEncoding('utf8');

    req.on('data', function(data) {
        res.json(tasks.add(data));
    });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});

