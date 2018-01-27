const express = require('express')
const app = express()

app.get('/about-page', function(req, res) {
  res.sendFile('index.html', { root: __dirname  + '/content/about-page' });
})



var server = app.listen(5000, function() {
console.log('server running on port 5000')
})
module.exports = server;
