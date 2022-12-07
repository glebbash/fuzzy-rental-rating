import { Head } from "$fresh/runtime.ts";

import PlacesView from "../islands/PlacesView.tsx";
import { displayRule } from "../logic/inference-engine.ts";
import { RATING_RULE } from "../logic/knowledge-base.ts";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fuzzy Rental Rating</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="./index.css" />
      </Head>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>
          Fuzzy Rental Rating
        </h1>

        <h3>
          <pre>@rating := {displayRule(RATING_RULE)}</pre>
        </h3>

        <PlacesView />

        <pre>
          <a href="https://github.com/glebbash">@glebbash</a>{" "}
          08/12/2022. A fuzzy logic system used to calculate rating of the rental places.{" "}
          <a href="https://en.wikipedia.org/wiki/Fuzzy_logic">Wikipedia</a>{" "}
          <a href="https://youtube.com/playlist?list=PLJEWP9Z0q94CxI6WHM4Oi5yAGKtIzZI5k">Good explanation</a>{" "}
          <a href="https://github.com/glebbash/fuzzy-rental-rating">Source</a>{" "}
        </pre>
      </div>
    </div>
  );
}
