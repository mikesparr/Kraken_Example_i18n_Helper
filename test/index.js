/*global describe:false, it:false, before:false, after:false, afterEach:false*/

'use strict';


var app = require('../index'),
    kraken = require('kraken-js'),
    request = require('supertest');


describe('/', function () {

    var mock;


    beforeEach(function (done) {
        kraken.create(app).listen(function (err, server) {
            mock = server;
            done(err);
        });
    });


    afterEach(function (done) {
        mock.close(done);
    });


    it('should say "hello"', function (done) {
        request(mock)
            .get('')
            .expect(200)
            .expect('Content-Type', /html/)
            .expect(/Hello, /)
            .end(function(err, res){
                done(err);
            });
    });
    
    // sorry I'm being lazy but enjoy the helper and fork
    it('should say "The quick brown fox..."', function (done) {
        request(mock)
            .get('')
            .expect(200)
            .expect('Content-Type', /html/)
            .expect(/The quick brown fox /)
            .end(function(err, res){
                done(err);
            });
    });

});