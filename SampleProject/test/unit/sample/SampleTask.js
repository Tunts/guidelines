var expect = require("chai").expect;

var requireHelper = require('../../require-helper');

var CalculatorPrototype = requireHelper('sample/SampleTask');

describe('SampleTask', function () {

  var sampleTask;

  beforeEach(function () {
    sampleTask = new SampleTask();
  });

  xit('Should find both roots of an equation', function (done) {
  });

  xit('Should find a single root for this equation', function (done) {
  });

  xit('Should return an empty array in case no roots are found', function (done) {
  });

  xit('Should return null in case the equation is not valid(non quadratic)', function (done) {
  });
});