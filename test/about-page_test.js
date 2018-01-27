var request = require("supertest");
var assert = require('assert');

describe('routes', function() {
  var server

  beforeEach(function() {
    // Clears the cache so a new server instance is used for each test.
    delete require.cache[require.resolve('../index')];
    server = require("../index");
  });

  afterEach(function() {
      server.close();
  });

  it('should return Ok when request /about-page', function(done) {
    request(server)
    .get('/about-page')
    .expect(200, done);
  });
})
