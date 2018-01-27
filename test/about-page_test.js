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

  it('should the correct body content', function(done) {
    const bodyAboutPage = `<h1 id="this-is-the-about-page">This is the About page</h1>
    <p>Acme Co. is a reputable maker of widgets and is an international brand.</p>
    <p>Thank you for your interest in our services. Please contact us at enquiries@acme.com.</p>
    request(server) `

    .get('/about-page')
    .end(function(err, res) {
      console.log(res)
      assert.equal(res.body, bodyAboutPage);
      done();
    });
  });

})
