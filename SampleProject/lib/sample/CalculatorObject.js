(function () {
  'use strict';

  var q = require('q');

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

  var Calculator = exports;

  Calculator.sumSync = function (a, b) {
    return a + b;
  };

  Calculator.divSync = function (a, b) {
    return a / b;
  };

  Calculator.mulSync = function (a, b) {
    return a * b;
  };

  Calculator.subSync = function (a, b) {
    return a - b;
  };

  Calculator.sum = function (a, b) {
    return defer(function(){
      return Calculator.sumSync(a, b);
    });
  };

  Calculator.div = function (a, b) {
    return defer(function(){
      return Calculator.divSync(a, b);
    });
  };

  Calculator.mul = function (a, b) {
    return defer(function(){
      return Calculator.mulSync(a, b);
    });
  };

  Calculator.sub = function (a, b) {
    return defer(function(){
      return Calculator.subSync(a, b);
    });
  };

})();
