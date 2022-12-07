import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import StarRatings from "https://esm.sh/react-star-ratings@2.3.0?alias=react:preact/compat";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);

  return (
    <div>
      <p>{count}</p>
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
      <StarRatings
        rating={2.403}
        starDimension="30px"
        starSpacing="2px"
        starRatedColor="rgb(255,226,52)"
      />
    </div>
  );
}
