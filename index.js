const express = require('express')
const app = express()

app.get('/about-page', function(req, res) {
  res.sendFile('index.html', { root: __dirname  + '/content/about-page' });
})

app.get('/jobs', function(req, res) {
  res.sendFile('index.html', { root: __dirname  + '/content/jobs' });
})

app.get('/valves', function(req, res) {
  res.send('Valves')
})

app.use(function(req, res, next) {
    res.status(404).send('Error 404 - This route doesn\'t exist');
});

var server = app.listen(5000, function() {
console.log('server running on port 5000')
})
module.exports = server;
