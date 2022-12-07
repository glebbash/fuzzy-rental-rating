import {
  Place,
  POPULARITY_MEMBERSHIPS,
  RATING_MEMBERSHIPS,
  RATING_RULE,
  RENOVATION_MEMBERSHIPS,
  RENT_MEMBERSHIPS,
} from "./knowledge-base.ts";
import { fuzz } from "./fuzzifier.ts";
import { defuzz } from "./defuzzifier.ts";
import { infer } from "./inference-engine.ts";

export type { Place } from "./knowledge-base.ts";

export function calculateRating(place: Place) {
  const popularity = fuzz(POPULARITY_MEMBERSHIPS, place.popularity);
  const renovation = fuzz(RENOVATION_MEMBERSHIPS, place.renovation);
  const rent = fuzz(RENT_MEMBERSHIPS, place.rent);

  const fuzzyRating = infer(RATING_RULE, {
    values: { popularity, renovation, rent },
  });

  const crispRating = defuzz(RATING_MEMBERSHIPS, fuzzyRating);

  return crispRating;
}
