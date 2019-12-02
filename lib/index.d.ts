/// <reference types="chai" />

declare global {
  namespace Chai {
    interface Members {
      with: ChaiIncludeOrderedMembersWithGaps.MembersWith;
    }

    interface Assert {
      includeOrderedMembersWithGaps<T>(superset: T[], subset: T[]): void;
      includeDeepOrderedMembersWithGaps<T>(superset: T[], subset: T[]): void;
      notIncludeOrderedMembersWithGaps<T>(superset: T[], subset: T[]): void;
      notIncludeDeepOrderedMembersWithGaps<T>(superset: T[], subset: T[]): void;
    }
  }
}

declare namespace ChaiIncludeOrderedMembersWithGaps {
  interface MembersWith {
    gaps(set: readonly any[], message?: string): void;
  }
}
