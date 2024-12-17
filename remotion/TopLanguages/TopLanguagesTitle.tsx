import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { z } from "zod";
import { PaneEffect } from "../PaneEffect";
import { PANE_BACKGROUND, PANE_BORDER, PANE_TEXT_COLOR } from "./Pane";
import { RotatingPlanet } from "./RotatingPlanet";

const INNER_BORDER_RADIUS = 30;
const PADDING = 20;

const topLanguagesTitle = z.object({
  pluralize: z.boolean(),
  randomizePlanetSeed: z.string(),
});

export const TopLanguagesTitle: React.FC<z.infer<typeof topLanguagesTitle>> = ({
  pluralize,
  randomizePlanetSeed,
}) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const spr = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
  });

  return (
    <PaneEffect
      style={{ scale: String(spr) }}
      innerRadius={INNER_BORDER_RADIUS + PADDING}
      pinkHighlightOpacity={1}
      whiteHighlightOpacity={1}
      padding={
        spring({
          fps,
          frame,
          config: {
            damping: 200,
          },
        }) * 20
      }
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: PANE_BACKGROUND,
          border: PANE_BORDER,
          padding: PADDING,
          paddingRight: PADDING * 2,
          alignItems: "center",
          borderRadius: INNER_BORDER_RADIUS + PADDING,
        }}
      >
        <div
          style={{
            borderRadius: INNER_BORDER_RADIUS,
            height: 120,
            width: 120,
            marginRight: PADDING,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RotatingPlanet randomSeed={randomizePlanetSeed} />
        </div>
        <div
          style={{
            color: PANE_TEXT_COLOR,
            fontSize: 55,
            fontFamily: "Mona Sans",
            fontWeight: 800,
            lineHeight: 1.1,
          }}
        >
          My Top <br /> {pluralize ? "Languages" : "Language"}
        </div>
      </div>{" "}
    </PaneEffect>
  );
};
