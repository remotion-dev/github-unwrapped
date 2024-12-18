import type { SVGProps } from "react";
import { interpolate } from "remotion";
import { UfoSvg } from "./UfoSvg";

export const UFO_WIDTH = 322;
export const UFO_HEIGHT = 208;

export const Ufo = ({
  x,
  y,
  scale,
  explodeAfter,
  yOffset,
  exit,
  column,
  columns,
  ...props
}: SVGProps<SVGSVGElement> & {
  readonly x: number;
  readonly y: number;
  readonly scale: number;
  readonly columns: number;
  readonly column: number;
  readonly explodeAfter: number;
  readonly yOffset: number;
  readonly exit: number;
}) => {
  const actualUfoWidth = UFO_WIDTH * scale;
  const actualUfoHeight = UFO_HEIGHT * scale;

  const offsetYFromCenter = y - 540;
  const offsetXFromCenter = x - 540;
  const angle = Math.atan2(offsetYFromCenter, offsetXFromCenter) + Math.PI / 2;

  const exitOffset = interpolate(exit, [0, 1], [0, Math.sin(angle) * 900]);
  const exitOffsetY = interpolate(exit, [0, 1], [0, -Math.cos(angle) * 1200]);

  return (
    <div>
      <UfoSvg
        style={{
          width: actualUfoWidth,
          height: actualUfoHeight,
          position: "absolute",
          left: x - actualUfoWidth / 2 + exitOffset,
          top: y - actualUfoHeight / 2 + yOffset + exitOffsetY,
        }}
        fill="none"
        {...props}
      />
    </div>
  );
};
