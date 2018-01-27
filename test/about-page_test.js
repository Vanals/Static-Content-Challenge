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
    const bodyAboutPage = "<!doctype html>\n" +
    "<html>\n" +
    '    <head>\n' +
    '        <title>Welcome to Acme</title>\n' +
    '    </head>\n' +
    '    <body>\n' +
    '      <h1 id="this-is-the-about-page">This is the About page</h1>\n' +
    '      <p>Acme Co. is a reputable maker of widgets and is an international brand.</p>\n' +
    '      <p>Thank you for your interest in our services. Please contact us at enquiries@acme.com.</p>\n' +
    '    </body>\n' +
    '</html>\n'

    request(server)
    .get('/about-page')
    .end(function(err, res) {
      console.log(res.text)
      assert.equal(res.text, bodyAboutPage);
      done();
    });
  });

})
