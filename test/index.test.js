'use strict';

const { expect, should, assert, use } = require('chai');

should();
use(require('..'));

describe('members', () => {
  it('should use the original method when used as a method', () => {
    expect([1, 2, 3]).to.include.ordered.members([1, 2, 3]);
    expect([0, 1, 2, 3]).to.not.include.ordered.members([1, 2, 3]);
  });
});
