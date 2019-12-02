'use strict';

const { expect, should, assert, use } = require('chai');

should();
use(require('..'));

describe('BDD-style', () => {
  describe('members', () => {
    it('should use the original method when used as a method', () => {
      expect([1, 2, 3]).to.include.ordered.members([1, 2, 3]);
      expect([0, 1, 2, 3]).to.not.include.ordered.members([1, 2, 3]);
      expect([1, 2, 3]).to.not.include.ordered.members([1, 3]);
    });

    describe('with.gaps', () => {
      it('should match even if not at the beginning', () => {
        expect([0, 1, 2, 3]).to.include.ordered.members.with.gaps([1, 2, 3]);
      });

      it('should match even with gaps', () => {
        expect([1, 2, 3]).to.include.ordered.members.with.gaps([1, 3]);
      });

      it('should not match if missing elements', () => {
        expect([1, 3]).to.not.include.ordered.members.with.gaps([1, 2, 3]);
      });

      it('should not match if elements are not ordered', () => {
        expect([2, 1, 3]).to.not.include.ordered.members.with.gaps([1, 2, 3]);
      });

      it("should honor 'deep'", () => {
        expect([{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }]).to.include.deep.ordered.members.with.gaps([{ a: 1 }, { c: 3 }]);
      });
    });
  });
});

describe('TDD-style', () => {
  describe('members.with.gaps', () => {
    it('should match even if not at the beginning', () => {
      assert.includeOrderedMembersWithGaps([0, 1, 2, 3], [1, 2, 3]);
    });

    it('should match even with gaps', () => {
      assert.includeOrderedMembersWithGaps([1, 2, 3], [1, 3]);
    });

    it('should not match if missing elements', () => {
      assert.notIncludeOrderedMembersWithGaps([1, 3], [1, 2, 3]);
    });

    it('should not match if elements are not ordered', () => {
      assert.notIncludeOrderedMembersWithGaps([2, 1, 3], [1, 2, 3]);
    });

    it('includeDeepOrderedMembersWithGaps', () => {
      assert.includeDeepOrderedMembersWithGaps([{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }], [{ a: 1 }, { c: 3 }]);
    });
  });
});
