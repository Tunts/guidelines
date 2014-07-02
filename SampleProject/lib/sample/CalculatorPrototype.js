(function () {
  'use strict';

  var q = require('q');

  var that;

  function Calculator() {
    that = this;
  }

  /**
   * Asynchronously call fn, return a promise.
   * @param fn - The function to be called, should take no arguments.
   * @returns {promise|Q.promise} - A promise that will be resolved with the return of fn
   */
  function defer(fn){
    var deferred = q.defer();
    setTimeout(function () {
      deferred.resolve(fn());
    }, 0);
    return deferred.promise;
  }

  module.exports = Calculator;

  Calculator.prototype.sumSync = function (a, b) {
    return a + b;
  };

  Calculator.prototype.divSync = function (a, b) {
    return a / b;
  };

  Calculator.prototype.mulSync = function (a, b) {
    return a * b;
  };

  Calculator.prototype.subSync = function (a, b) {
    return a - b;
  };

  Calculator.prototype.sum = function (a, b) {
    return defer(function(){
      return that.sumSync(a, b);
    });
  };

  Calculator.prototype.div = function (a, b) {
    return defer(function(){
      return that.divSync(a, b);
    });
  };

  Calculator.prototype.mul = function (a, b) {
    return defer(function(){
      return that.mulSync(a, b);
    });
  };

  Calculator.prototype.sub = function (a, b) {
    return defer(function(){
      return that.subSync(a, b);
    });
  };

})();
