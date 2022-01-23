
var request = require('request');
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);
var should = require('chai').should();


describe('Random url', function() {


    it('Get data from random url should return 404', function(done) {
        
        chai.request('https://qa-interview.srcli.xyz')
            .get('/random')
            .end(function(err, res) {
                if (err) done(err);
                expect(res).to.have.status(404);
                done();
           });

    });

    it('post data from random url should return 404', function(done) {
        
        chai.request('https://qa-interview.srcli.xyz')
            .get('/random')
            .end(function(err, res) {
                if (err) done(err);
                expect(res).to.have.status(404);
                done();
           });

    });

});
