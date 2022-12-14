// deno-lint-ignore ban-ts-comment
// @ts-nocheck

export function fuzz(memberships, crispValue: number) {
  return memberships.map((membership) => {
    const membershipFn = MEMBERSHIP_FNS[membership.type];

    return membershipFn(crispValue, membership);
  });
}

const MEMBERSHIP_FNS = {
  z: (x, { c, d }) => {
    if (x > d) return 0;
    if (x < c) return 1;
    return (d - x) / (d - c);
  },
  s: (x, { a, b }) => {
    if (x < a) return 0;
    if (x > b) return 1;
    return (x - a) / (b - a);
  },
  triangle: (x, { a, m, b }) => {
    if (x <= a) return 0;
    if (x >= b) return 0;
    if (x <= m) {
      return (x - a) / (m - a);
    } else {
      return (b - x) / (b - m);
    }
  },
};
