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

  it('should return Ok when request /valves', function(done) {
    request(server)
    .get('/valves')
    .expect(200, done);
  });

  it('should return the correct body content', function(done) {
    const bodyValves = "<!doctype html>\n" +
    "<html>\n" +
        "<head>\n" +
            "<title>Welcome to Acme</title>\n" +
        "</head>\n" +
        "<body>\n" +
          "<h1>Valves</h1>\n" +
          "<p>Acme Co. valves are amongst the highest quality in the industry. Whether it&#39;s for industrial, commercial, medical or space exploration, you can always count on an Acme Co. valve.</p>\n" +
        "</body>" +
    "</html>\n"

    request(server)
    .get('/valves')
    .end(function(err, res) {
      assert.equal(res.text, bodyValves);
      done();
    });
  });  
})
