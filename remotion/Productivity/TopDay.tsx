import React from "react";
import { AbsoluteFill } from "remotion";
import { z } from "zod";
import { Gradient } from "../Gradients/NativeGradient";
import { PaneEffect } from "../PaneEffect";
import {
  PANE_BACKGROUND,
  PANE_BORDER,
  PANE_TEXT_COLOR,
} from "../TopLanguages/Pane";
import { Wheel } from "./Wheel";

const labelStyle: React.CSSProperties = {
  color: PANE_TEXT_COLOR,
  fontWeight: "bold",
  fontSize: 45,
  fontFamily: "Mona Sans",
};

export const topDaySchema = z.object({
  value: z.string(),
  label: z.string(),
});

const TOP_DAY_SPACING = 0;

export const TopDay: React.FC<
  z.infer<typeof topDaySchema> & {
    readonly values: string[];
    readonly radius: number;
    readonly renderLabel: (value: string) => React.ReactNode;
    readonly delay: number;
    readonly soundDelay: number;
  }
> = ({ value, label, values, radius, renderLabel, delay, soundDelay }) => {
  const maskImage = `linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 1) 70%, transparent 100%)`;

  return (
    <PaneEffect
      innerRadius={50}
      padding={20}
      pinkHighlightOpacity={0.2}
      whiteHighlightOpacity={1}
      style={{}}
    >
      <div
        style={{
          marginTop: TOP_DAY_SPACING,
          marginLeft: TOP_DAY_SPACING,
          marginRight: TOP_DAY_SPACING,
          display: "flex",
          backgroundColor: PANE_BACKGROUND,
          height: 200,
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 50,
          borderRadius: 50,
          position: "relative",
          overflow: "hidden",
          border: PANE_BORDER,
        }}
      >
        <div style={labelStyle}>{label}</div>
        <div
          style={{
            position: "absolute",
            right: 0,
            height: "100%",
            width: 400,
          }}
        >
          <AbsoluteFill>
            <Gradient gradient="whiteToTransparent" />
          </AbsoluteFill>
          <AbsoluteFill
            style={{
              maskImage,
              WebkitMaskImage: maskImage,
            }}
          >
            <Wheel
              renderLabel={renderLabel}
              radius={radius}
              values={values}
              value={value}
              delay={delay}
              soundDelay={soundDelay}
            />
          </AbsoluteFill>
        </div>
      </div>
    </PaneEffect>
  );
};
