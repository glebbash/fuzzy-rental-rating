// deno-lint-ignore ban-ts-comment
// @ts-nocheck

import { zip } from "./utils.ts";
import { FuzzySet } from "./types.ts";

// Centroid method
export function defuzz(memberships, fuzzyValue: FuzzySet) {
  return zip(fuzzyValue, memberships)
    .map(([x, m]) => x * midpoint(m))
    .reduce(sum) / fuzzyValue.reduce(sum);
}

function midpoint(membership) {
  return MID_POINT_FNS[membership.type](membership);
}

const MID_POINT_FNS = {
  z: (props) => props.c,
  s: (props) => props.b,
  triangle: (props) => props.m,
};

const sum = (a, b) => a + b;
