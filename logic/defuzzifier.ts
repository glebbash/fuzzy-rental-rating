// deno-lint-ignore ban-ts-comment
// @ts-nocheck

import { FuzzySet } from "./types.ts";

// Centroid method
export function defuzz(memberships, fuzzyValue: FuzzySet) {
  return fuzzyValue.map((x, i) => x * midpoint(memberships[i])).reduce(sum) /
    fuzzyValue.reduce(sum);
}

function midpoint(membership) {
  return MID_POINT_FNS[membership.type](membership);
}

const sum = (a, b) => a + b;

const MID_POINT_FNS = {
  z: (props) => props.c,
  s: (props) => props.b,
  triangle: (props) => props.m,
};
