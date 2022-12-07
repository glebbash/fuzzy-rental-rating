// deno-lint-ignore ban-ts-comment
// @ts-nocheck

import { useEffect, useRef } from "preact/hooks";

const WIDTH = 300;
const HEIGHT = 240;
const MID_H = HEIGHT / 2;

export default function MembershipChart(
  { title, memberships, value, drawStyle, ...props },
) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d")!;
    ctx.strokeStyle = drawStyle;
    ctx.fillStyle = drawStyle;
    ctx.font = "12px Arial";

    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    path(ctx, [
      [value, 0],
      [value, MID_H + MID_H / 2],
    ]);

    ctx.beginPath();
    ctx.arc(value, HEIGHT - (MID_H + MID_H / 2 + 5), 5, 0, 2 * Math.PI);
    ctx.stroke();

    for (const membership of memberships) {
      switch (membership.type) {
        case "z": {
          path(ctx, [
            [0, MID_H],
            [membership.c, MID_H],
            [membership.d, 0],
          ]);
          ctx.fillText(membership.c, membership.c, MID_H - 5);
          break;
        }
        case "s": {
          path(ctx, [
            [membership.a, 0],
            [membership.b, MID_H],
            [ctx.canvas.width, MID_H],
          ]);
          ctx.fillText(membership.b, membership.b, MID_H - 5);
          break;
        }
        case "triangle": {
          path(ctx, [
            [membership.a, 0],
            [membership.m, MID_H],
            [membership.b, 0],
          ]);
          ctx.fillText(membership.m, membership.m, MID_H - 5);
          break;
        }
      }
    }
  }, [value]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>{title}:</p>
      <canvas
        ref={canvasRef}
        style={{
          border: "1px solid black",
          margin: "8px",
        }}
        width={WIDTH}
        height={HEIGHT}
        {...props}
      />
    </div>
  );
}

function path(ctx, [firstPart, ...otherParts]) {
  const height = ctx.canvas.height;

  ctx.beginPath();
  ctx.moveTo(firstPart[0], height - firstPart[1]);
  for (const part of otherParts) {
    ctx.lineTo(part[0], height - part[1]);
  }
  ctx.stroke();
}
