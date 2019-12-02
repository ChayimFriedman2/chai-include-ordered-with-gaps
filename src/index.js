'use strict';

/**
 * @param {import('chai')} chai
 * @param {Chai.ChaiUtils} utils
 */
module.exports = function(chai, utils) {
  const { Assertion, assert, AssertionError } = chai;

  Assertion.overwriteChainableMethod(
    'members',
    function(_super) {
      return _super;
    },
    function(_super) {},
  );
};
