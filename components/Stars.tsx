import { JSX } from "preact";

type Props = JSX.HTMLAttributes<HTMLSpanElement> & {
  rating: number;
};

export default function Stars({ rating, ...props }: Props) {
  return (
    <span {...props}>
      <Star index={1} rating={rating} />
      <Star index={2} rating={rating} />
      <Star index={3} rating={rating} />
      <Star index={4} rating={rating} />
      <Star index={5} rating={rating} />
    </span>
  );
}

function Star({ rating, index }: { rating: number; index: number }) {
  return (
    <span
      class="fa fa-star"
      style={{ color: rating >= index ? "orange" : "black" }}
    />
  );
}
