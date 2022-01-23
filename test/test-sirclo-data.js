
var request = require('request');
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);
var should = require('chai').should();


describe('Data Page', function() {


    it('Get data before login should show login page', function(done) {
        
        chai.request('https://qa-interview.srcli.xyz')
            .get('/data')
            .end(function(err, res) {
                if (err) done(err);
                expect(res).to.have.status(200);
                expect(res.text).to.include("Username");
                expect(res.text).to.include("password");
                expect(res.text).to.include("login");
                done();
           });

    });

    it('Get data after login should show 2 table with 10 latest income and outcome', function(done) {
        
        chai.request('https://qa-interview.srcli.xyz')
            .get('/data')
            .set('Cookie', 'username=root')
            .end(function(err, res) {
                if (err) done(err);
                expect(res).to.have.status(200);
                expect(res.text).to.include("TimeStamp");
                expect(res.text).to.include("Deskripsi");
                expect(res.text).to.include("Jumlah");
                expect(res.text).to.include("pemasukan");
                expect(res.text).to.include("pengeluaran");
                done();
           });

    });

});
