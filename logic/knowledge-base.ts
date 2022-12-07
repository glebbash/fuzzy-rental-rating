export type Place = {
  name: string;
  popularity: number;
  renovation: number;
  rent: number;
};

export const POPULARITY_MEMBERSHIPS = [
  { type: "z", c: 50, d: 100 },
  { type: "triangle", a: 60, m: 150, b: 240 },
  { type: "s", a: 200, b: 250 },
];

export const RENOVATION_MEMBERSHIPS = [
  { type: "z", c: 50, d: 100 },
  { type: "triangle", a: 60, m: 150, b: 240 },
  { type: "s", a: 200, b: 250 },
];

export const RENT_MEMBERSHIPS = [
  { type: "z", c: 50, d: 100 },
  { type: "triangle", a: 60, m: 150, b: 240 },
  { type: "s", a: 200, b: 250 },
];

export const RATING_MEMBERSHIPS = [
  { type: "z", c: 0, d: 1 },
  { type: "triangle", a: 1, m: 3, b: 4 },
  { type: "s", a: 4, b: 5 },
];

export const RATING_RULE = [
  "sum",
  "popularity",
  ["invert", "renovation"],
  ["invert", "rent"],
];
