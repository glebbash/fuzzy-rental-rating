// deno-lint-ignore ban-ts-comment
// @ts-nocheck

import { useState } from "preact/hooks";
import { faker } from "https://esm.sh/@faker-js/faker@7.6.0";

import Stars from "../components/Stars.tsx";
import { calculateRating, Place } from "../logic/controller.ts";

const INITIAL_SAMPLE_PLACES = Array.from({ length: 5 }, createRandomPlace);

type Props = {
  onPlaceSelected: (place: Place) => void;
};

export default function PlacesTable({ onPlaceSelected }: Props) {
  const [places, setPlaces] = useState(INITIAL_SAMPLE_PLACES);
  const [, rerender] = useState(crypto.randomUUID());

  const generateSamplePlaces = () => {
    setPlaces(Array.from({ length: 5 }, createRandomPlace));
  };

  const itemsList = places.map((place) => (
    <TableRow
      place={place}
      onChange={() => rerender(crypto.randomUUID())}
      onSelect={onPlaceSelected}
    />
  ));

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Popularity (visitors/h)</th>
          <th>Renovation (hours)</th>
          <th>Rent ($/month)</th>
          <th>Rating</th>
        </tr>
        {itemsList}
      </table>
      <input
        type="button"
        value="Find new places"
        onClick={generateSamplePlaces}
      />
    </div>
  );
}

type RowProps = {
  place: Place;
  onChange: () => void;
  onSelect: (place: Place | null) => void;
};

function TableRow(
  { place, onChange, onSelect, ...props }: RowProps,
) {
  return (
    <tr
      key={place.name}
      onMouseOver={() => onSelect(place)}
      onMouseOut={() => onSelect(null)}
    >
      <td>
        <input
          type="text"
          value={place.name}
          onChange={(e) => {
            place.name = e.target.value;
            onChange();
          }}
        />
      </td>
      <td>
        <input
          type="number"
          value={place.popularity}
          onChange={(e) => {
            place.popularity = e.target.value;
            onChange();
          }}
        />
      </td>
      <td>
        <input
          type="number"
          value={place.renovation}
          onChange={(e) => {
            place.renovation = e.target.value;
            onChange();
          }}
        />
      </td>
      <td>
        <input
          type="number"
          value={place.rent}
          onChange={(e) => {
            place.rent = e.target.value;
            onChange();
          }}
        />
      </td>
      <td>
        <Stars rating={calculateRating(place)} />
      </td>
    </tr>
  );
}

function createRandomPlace(): Place {
  return {
    name: faker.address.streetAddress(),
    popularity: faker.datatype.number({ min: 0, max: 300 }),
    renovation: faker.datatype.number({ min: 0, max: 300 }),
    rent: faker.datatype.number({ min: 0, max: 300 }),
  };
}
