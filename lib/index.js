'use strict';

/**
 * @param {import('chai')} chai
 * @param {Chai.ChaiUtils} utils
 */
module.exports = function(chai, utils) {
  const { Assertion, assert } = chai;

  const originalMembers = Assertion.prototype.members;

  Assertion.addChainableMethod(
    'members',
    function() {
      originalMembers.apply(this, arguments);
    },
    function(_super) {},
  );

  function strictEqual(a, b) {
    return a === b;
  }

  function indexableIncludesWithGaps(actual, expected, deep) {
    const comparer = deep ? utils.eql : strictEqual;
    let actualIndex = 0,
      expectedIndex = 0;
    for (actualIndex = 0, expectedIndex = 0; actualIndex < actual.length; actualIndex++) {
      if (comparer(actual[actualIndex], expected[expectedIndex])) {
        expectedIndex++;
      }
    }

    this.assert(
      expected.length === expectedIndex,
      'expected #{this} to ' + (deep ? 'deep ' : '') + 'include values of #{exp}, ordered, possibly with gaps',
      'expected #{this} to not ' + (deep ? 'deep ' : '') + 'include values of #{exp}, ordered, possibly with gaps',
      expected,
    );
  }

  Assertion.addMethod('gaps', function(subset) {
    indexableIncludesWithGaps.call(this, this._obj, subset, utils.flag(this, 'deep'));
  });
};
