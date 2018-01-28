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

  it('should return Ok when request /jobs', function(done) {
    request(server)
    .get('/jobs')
    .expect(200, done);
  });

  it('should return the correct body content', function(done) {
    //Is better write all the html code or test the presence of the correct body looking
    //for one of the tags by ID ?
    const bodyJobs = "<!doctype html>\n" +
    "<html>\n" +
    "    <head>\n" +
    "        <title>Welcome to Acme</title>\n" +
    "    </head>\n" +
    "    <body>\n" +
    "      <h1>Jobs at Acme Co.</h1>\n" +
    "      <p>Acme Co. is often seeking candidates in the areas of marketing, finance, customer support and sales. If you are an enthusiastic go-getter, you don&#39;t need to look any further for your next step up the corporate career ladder.</p>\n" +
    "      <p>Send us an email at careers@acme.com for more information.</p>\n" +
    "    </body>\n" +
    "</html>\n"

    request(server)
    .get('/jobs')
    .end(function(err, res) {
      assert.equal(res.text, bodyJobs);
      done();
    });
  });

})
