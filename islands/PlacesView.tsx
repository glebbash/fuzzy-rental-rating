import { useState } from "preact/hooks";

import {
  Place,
  POPULARITY_MEMBERSHIPS,
  RENOVATION_MEMBERSHIPS,
  RENT_MEMBERSHIPS,
} from "../logic/knowledge-base.ts";
import MembershipChart from "./MembershipChart.tsx";
import PlacesTable from "./PlacesTable.tsx";

export default function x() {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  return (
    <div>
      <PlacesTable onPlaceSelected={setSelectedPlace} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <MembershipChart
          title="Popularity"
          value={selectedPlace?.popularity}
          memberships={POPULARITY_MEMBERSHIPS}
          drawStyle="#3F0071"
        />
        <MembershipChart
          title="Renovation"
          value={selectedPlace?.renovation}
          memberships={RENOVATION_MEMBERSHIPS}
          drawStyle="#FB2576"
        />
        <MembershipChart
          title="Rent"
          value={selectedPlace?.rent}
          memberships={RENT_MEMBERSHIPS}
          drawStyle="#332FD0"
        />
      </div>
    </div>
  );
}
