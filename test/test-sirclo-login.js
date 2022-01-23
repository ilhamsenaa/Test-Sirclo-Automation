
var request = require('request');
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);
var should = require('chai').should();


describe('Login Page', function() {

    it('Get login before login should show login page', function(done) {
        
        chai.request('https://qa-interview.srcli.xyz')
            .get('/login')
            .end(function(err, res) {
                if (err) done(err);
                expect(res).to.have.status(200);
                expect(res.text).to.include("Username");
                expect(res.text).to.include("password");
                expect(res.text).to.include("login");
                done();
           });

    });

    it('Post login after login with valid username and password should show welcome page', function(done) {
        
        
        chai.request('https://qa-interview.srcli.xyz')
          .post('/login')
          .send('username=root')
          .send('password=root123')
          .end(function(err, res) {
            if (err) done(err);
            res.should.have.status(200);
            expect(res.text).to.include("Welcome!");
            done();
         });
    
    });

    it('Post login after login with invalid username and password should return 400', function(done) {
        
        
        chai.request('https://qa-interview.srcli.xyz')
          .post('/login')
          .send('username=root')
          .send('password=root12')
          .end(function(err, res) {
            if (err) done(err);
            res.should.have.status(401);
            done();
         });
    
    });
});
