# fuzzy-store-rating

Store rating system using fuzzy logic (lab project)

- [fuzzy-store-rating](#fuzzy-store-rating)
  - [Problem](#problem)
  - [Usage](#usage)

## Problem

Problem: finding the best place to rent a store

Factors that affect the decision:

- Place popularity: how many people visit the surrounding area
- Condition: how much time is needed to bring the store to a good condition
- Price: how much does it cost to rent the place per month

Example data in json:

```json
[
  {
    "_type": "place",
    "name": "Place 1",
    "popularity": 100,
    "condition": 10,
    "price_per_month": 1000
  },
  {
    "_type": "place",
    "name": "Place 2",
    "popularity": 600,
    "condition": 0,
    "price_per_month": 450
  },
  {
    "_type": "place",
    "name": "Place 3",
    "popularity": 200,
    "condition": 5,
    "price_per_month": 2000
  },
  {
    "_type": "place",
    "name": "Place 4",
    "popularity": 300,
    "condition": 0,
    "price_per_month": 500
  }
]
```

The best place is the one with the highest popularity, best condition and the
lowest price.

The goal is to find a rating (from 0 to 5 stars) for each place that can be used
to rank them.

This can be achived using the fuzzy logic.

The system consists of:

- **fuzzyfier**

  The fuzzyfier converts the crisp data into fuzzy data.

- **fuzzy rules**

  The fuzzy rules are used to define the fuzzy logic.

- **inference engine**

  The inference engine uses the fuzzy rules to calculate the rating for each
  place.

- **defuzzifier**

  The defuzzifier converts the fuzzy rating into a crisp rating.

The fuzzyfier is implemented using the following functions:

```javascript
function fuzzyPopularity(popularity) {
  if (popularity < 100) {
    return 0;
  } else if (popularity < 200) {
    return (popularity - 100) / 100;
  } else if (popularity < 300) {
    return 1;
  } else if (popularity < 400) {
    return (400 - popularity) / 100;
  } else {
    return 0;
  }
}

function fuzzyCondition(condition) {
  if (condition < 5) {
    return 0;
  } else if (condition < 10) {
    return (condition - 5) / 5;
  } else if (condition < 15) {
    return 1;
  } else if (condition < 20) {
    return (20 - condition) / 5;
  } else {
    return 0;
  }
}

function fuzzyPrice(price) {
  if (price < 500) {
    return 0;
  } else if (price < 1000) {
    return (price - 500) / 500;
  } else if (price < 1500) {
    return 1;
  } else if (price < 2000) {
    return (2000 - price) / 500;
  } else {
    return 0;
  }
}
```

The fuzzy rule for finding the rating is:

```javascript
function fuzzyRating(popularity, condition, price) {
  return popularity + condition + (1 - price);
}
```

The inference engine is implemented using the following function:

```javascript
function fuzzyRatingForPlace(place) {
  let popularity = fuzzyPopularity(place.popularity);
  let condition = fuzzyCondition(place.condition);
  let price = fuzzyPrice(place.price_per_month);

  return fuzzyRating(popularity, condition, price);
}
```

The defuzzifier is implemented using the following function:

```javascript
function defuzzify(fuzzyRating) {
  return fuzzyRating * 5;
}
```

The final rating for each place is calculated using the following function:

```javascript
function calculatePlaceRating(place) {
  let fuzzyRating = fuzzyRatingForPlace(place);
  return defuzzify(fuzzyRating);
}
```

## Usage

Start the project:

```
deno task start
```
