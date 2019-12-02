/// <reference types="chai" />

declare global {
  namespace Chai {
    interface Members {
      with: ChaiIncludeOrderedMembersWithGaps.MembersWith;
    }
  }
}

declare namespace ChaiIncludeOrderedMembersWithGaps {
  interface MembersWith {
    gaps(set: readonly any[], message?: string): void;
  }
}
