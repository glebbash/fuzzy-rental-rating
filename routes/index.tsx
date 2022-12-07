import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import StarRatings from "https://esm.sh/react-star-ratings@2.3.0?alias=react:preact/compat";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fuzzy Store Rating</title>
      </Head>
      <div>
        <img
          src="/logo.svg"
          width="128"
          height="128"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <Counter start={3} />
        <StarRatings
          rating={2.403}
          starDimension="30px"
          starSpacing="2px"
          starRatedColor="rgb(255,226,52)"
        />
      </div>
    </>
  );
}
