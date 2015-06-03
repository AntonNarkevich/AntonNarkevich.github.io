var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

var api = require('../api/');

chai.use(chaiAsPromised);

chai.should();


describe('API', function(){

    describe('sum', function() {
        it('should return number', function(){
            api.sum(1, 1).should.be.a('number');
        });

        it('should return numbers sum', function(){
            api.sum(1, 2).should.equal(3);
        });
    });

    describe('getData', function() {
        it('should return an object', function(){
            api.getData().should.eventually.be.an('object');
        });

        it('should has property "a"', function(){
            api.getData().should.eventually.have.property('a');
        });

        it('should has property "b" equals to test string', function(){
            api.getData().should.eventually.have.property('b', 'test string');
        });
    });
});