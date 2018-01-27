var request = require("supertest");
var assert = require('assert');

it('should return Ok when request /about-page', function(done) {
  request(app)
  .get('/about-page')
  .expect(200, done);
});
