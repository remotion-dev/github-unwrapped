import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import type { z } from "zod";
import { PaneEffect } from "../PaneEffect";
import { PANE_BACKGROUND, PANE_TEXT_COLOR } from "../TopLanguages/Pane";
import { TitleImage, type openingTitleSchema } from "./TitleImage";

const title: React.CSSProperties = {
  fontSize: 80,
  fontWeight: "bold",
  backgroundClip: "text",
  backgroundImage: `linear-gradient(270.02deg,black 10.63%,${PANE_TEXT_COLOR} 50.87%)`,
  WebkitBackgroundClip: "text",
  backgroundColor: "text",
  WebkitTextFillColor: "transparent",
  lineHeight: 1.1,
};

const INNER_BORDER_RADIUS = 30;
const PADDING = 20;

export const OpeningTitle: React.FC<
  z.infer<typeof openingTitleSchema> & {
    readonly exitProgress: number;
  }
> = ({ login, exitProgress, startAngle, rocket }) => {
  const { fps, height } = useVideoConfig();
  const frame = useCurrentFrame();

  const enter = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
    delay: 50,
    durationInFrames: 50,
  });

  const rotate = 1;

  const startRotation = -10;
  const endRotation = 10;

  const rotation = interpolate(rotate, [0, 1], [Math.PI * 1.5, 0]);
  const x = interpolate(
    frame,
    [60, 120],
    startAngle === "left"
      ? [endRotation, startRotation]
      : [startRotation, endRotation],
  );
  const y = interpolate(enter, [0, 1], [height, 0]);

  const distance = interpolate(exitProgress, [0, 1], [1, 0.000005], {});
  const scaleDivided = 1 / distance;
  const translateY = (scaleDivided - 1) * -400;

  const rotateX = interpolate(exitProgress, [0, 1], [0, Math.PI * 0.2]);

  const effectProgress = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
    delay: 70,
    durationInFrames: 20,
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        color: PANE_TEXT_COLOR,
        fontFamily: "Mona Sans",
        fontSize: 40,
        marginTop: -200 + y,
        perspective: 1000,
        scale: String(login.length > 18 ? 0.75 : 1),
      }}
    >
      <PaneEffect
        innerRadius={INNER_BORDER_RADIUS + PADDING}
        style={{
          transform: `scale(${scaleDivided}) rotateY(${x}deg) rotateX(${
            rotation + rotateX
          }rad) translateY(${translateY}px)`,
        }}
        whiteHighlightOpacity={1}
        pinkHighlightOpacity={effectProgress}
        padding={effectProgress * 20}
      >
        <div
          style={{
            background: PANE_BACKGROUND,
            display: "inline-flex",
            flexDirection: "row",
            paddingRight: 70,
            paddingTop: PADDING,
            paddingBottom: PADDING,
            paddingLeft: PADDING,
            alignItems: "center",
            borderRadius: INNER_BORDER_RADIUS + PADDING,
          }}
        >
          <TitleImage startAngle={startAngle} login={login} rocket={rocket} />
          <div>
            <div>
              This is my <strong>#GitHubUnwrapped</strong>
            </div>
            <div style={title}>{login}</div>
          </div>
        </div>
      </PaneEffect>
    </AbsoluteFill>
  );
};
