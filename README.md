# Fuzzy rental rating (lab project)

A fuzzy logic system used to calculate rating of the rental places.

- [Fuzzy rental rating (lab project)](#fuzzy-rental-rating-lab-project)
  - [Problem](#problem)
  - [Solution](#solution)
  - [Architecture](#architecture)
  - [Usage](#usage)

## Problem

Problem: finding the best place to rent

Factors that affect the decision:

- Place popularity: how many people visit the place per hour
- Renovation: how many hours is needed to bring the place to a good condition
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

## Solution

The best place is the one with the highest popularity, least time for renovation
and the lowest rent.

The goal is to calculate a rating (from 0 to 5 stars) for each place that can be
used to rank them.

This can be achived using the fuzzy logic algorithm.

## Architecture

The system consists of:

- **Fuzzyfier**

  The fuzzyfier converts the crisp data into fuzzy data.

- **Knowledge base**

  Contains:
  - fuzzy logic rule to calculate rating.
  - membership functions for popularity, renovation, rent

- **Inference engine**

  The inference engine uses the rules from knowledge base to infer fuzzy value
  of rating based on fuzzy values of popularity, renovation, rent.

- **Defuzzifier**

  The defuzzifier converts the fuzzy data into a crisp data.

## Usage

Start the project:

```
deno task start
```
