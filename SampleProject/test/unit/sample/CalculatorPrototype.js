var chai = require("chai");
var expect = chai.expect;
chai.use(require("chai-as-promised"));

var requireHelper = require('../../require-helper');

var CalculatorPrototype = requireHelper('sample/CalculatorPrototype');

describe('Prototypical calculator', function () {

  var calculator;

  beforeEach(function () {
    calculator = new CalculatorPrototype();
  });

  it('should synchronously add', function (done) {
    expect(calculator.sumSync(3, 4)).to.equal(7);
    done();
  });

  it('should asynchronously add', function (done) {
    expect(calculator.sum(3, 4)).to.eventually.equal(7).notify(done);
  });

  it('should synchronously sub', function (done) {
    expect(calculator.subSync(3, 4)).to.equal(-1);
    done();
  });

  it('should asynchronously sub', function (done) {
    expect(calculator.sub(3, 4)).to.eventually.equal(-1).notify(done);
  });

  it('should synchronously mul', function (done) {
    expect(calculator.mulSync(3, 4)).to.equal(12);
    done();
  });

  it('should asynchronously mul', function (done) {
    expect(calculator.mul(3, 4)).to.eventually.equal(12).notify(done);
  });

  it('should synchronously div', function (done) {
    expect(calculator.divSync(4, 2)).to.equal(2);
    done();
  });

  it('should asynchronously div', function (done) {
    expect(calculator.div(4, 2)).to.eventually.equal(2).notify(done);
  });

});