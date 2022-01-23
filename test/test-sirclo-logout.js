
var request = require('request');
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);
var should = require('chai').should();


describe('Logout', function() {

    it('Post logout after login should redirect to  welcome page', function(done) {

         chai.request('https://qa-interview.srcli.xyz')
          .post('/logout')
          .set('Cookie', 'username=root')
          .end(function(err, res) {
            if (err) done(err);
            res.should.have.status(200);
            expect(res.text).to.include("Welcome!");
            done();
         });

    });

});
