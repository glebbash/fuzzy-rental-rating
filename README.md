# fuzzy-store-rating

Store rating system using fuzzy logic (lab project)

- [fuzzy-store-rating](#fuzzy-store-rating)
  - [Problem](#problem)
  - [Usage](#usage)

## Problem

Problem: finding the best place to rent a store

Factors that affect the decision:

- Place popularity: how many people visit the place per hour
- renovation: how many hours is needed to bring the place to a good condition
- Rent: how much does it cost to rent the place per month

Example data in json:

```json
[
  {
    "name": "Place 1",
    "popularity": 100,
    "renovation": 10,
    "rent": 1000
  },
  {
    "name": "Place 2",
    "popularity": 600,
    "renovation": 0,
    "rent": 450
  },
  {
    "name": "Place 3",
    "popularity": 200,
    "renovation": 5,
    "rent": 2000
  },
  {
    "name": "Place 4",
    "popularity": 300,
    "renovation": 0,
    "rent": 500
  }
]
```

The best place is the one with the highest popularity, least time for renovation
and the lowest rent.

The goal is to calculate a rating (from 0 to 5 stars) for each place that can be
used to rank them.

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

## Usage

Start the project:

```
deno task start
```
