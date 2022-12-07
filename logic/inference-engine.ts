// deno-lint-ignore ban-ts-comment
// @ts-nocheck

import { zip } from "./utils.ts";

export function displayRule(rule) {
  if (typeof rule === "string") {
    return "@" + rule;
  }

  return "(" + rule[0] + " " + rule.slice(1).map(displayRule).join(" ") + ")";
}

export function infer(rule, ctx) {
  if (typeof rule === "string") {
    return FUZZY_OPERATIONS["_value"](rule, ctx);
  }

  return FUZZY_OPERATIONS[rule[0]](rule.slice(1), ctx);
}

const FUZZY_OPERATIONS = {
  _value: (name, ctx) => {
    return ctx.values[name];
  },
  sum: (rules, ctx) => {
    return rules.map((r) => infer(r, ctx)).reduce(fuzzySum);
  },
  invert: ([xRule], ctx) => {
    return infer(xRule, ctx).slice().reverse();
  },
};

const fuzzySum = (a, b) => zip(a, b).map(([a_, b_]) => Math.min(a_ + b_, 1));
