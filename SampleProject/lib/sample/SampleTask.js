(function () {
  'use strict';

  /**
   * This is a module used for description of a sample task, to serve as example of the
   * description level to be expected
   * @constructor
   */
  function SampleTask() {
  }

  module.exports = SampleTask;

  /**
   * This method is meant to find the roots of a quadratic
   * equation with the help of the quadratic formula
   * http://en.wikipedia.org/wiki/Quadratic_formula
   * @param a
   * @param b
   * @param c
   * @returns {Array} - The roots of the equation
   */
  SampleTask.prototype.quadraticFormula = function(a, b, c){
    return [a, b, c];
  };

})();
