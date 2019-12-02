'use strict';

/**
 * @param {import('chai')} chai
 * @param {Chai.ChaiUtils} utils
 */
module.exports = function(chai, utils) {
  const { Assertion, assert, AssertionError } = chai;

  const originalMembers = Assertion.prototype.members;

  Assertion.addChainableMethod(
    'members',
    function() {
      originalMembers.apply(this, arguments);
    },
    function(_super) {},
  );
};
