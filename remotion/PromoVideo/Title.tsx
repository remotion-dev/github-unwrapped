import React from "react";
import {
  AbsoluteFill,
  Easing,
  OffthreadVideo,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { getFlame } from "../Opening/TakeOff";
import { TitleCardOctocat } from "../TopLanguages/TitleCardOctocat";
import { RocketFront } from "../TopLanguages/svgs/FrontRocketSource";
import type { PromoVideoLayout } from "./promo-video-layout";

export const PromoVideoTitle: React.FC<{
  readonly layout: PromoVideoLayout;
}> = ({ layout }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = interpolate(frame, [20, 60], [-0.2, 1.4], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const top = interpolate(
    progress,
    [0, 1],
    [layout === "short" ? 1400 : 800, layout === "short" ? 100 : -500],
    {},
  );
  const rotate = interpolate(progress, [0, 1], [0, -Math.PI / 12]);
  const left = interpolate(progress, [0, 1], [0, -200]) + 200;

  const prog = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
    durationInFrames: 50,
    delay: 20,
  });

  const scale = prog * 0.8 + 1;

  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          scale: String(scale),
        }}
      >
        <AbsoluteFill
          style={{
            translate: layout === "short" ? 0 : "100px",
            transformOrigin: "top right",
            scale: String(layout === "short" ? 1.2 : 0.8),
            top: layout === "short" ? -800 : 40,
          }}
        >
          <TitleCardOctocat />
        </AbsoluteFill>
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontFamily: "Mona Sans",
          fontSize: layout === "short" ? 90 : 70,
          fontWeight: "bolder",
          scale: String(prog),
        }}
      >
        <div
          style={{
            backgroundClip: "text",
            backgroundImage:
              "linear-gradient(270.02deg, #bbb 20.63%, #fff 99.87%)",
            WebkitBackgroundClip: "text",
            backgroundColor: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          #GitHubUnwrapped
        </div>
        <div
          style={{
            backgroundClip: "text",
            backgroundImage:
              "linear-gradient(270.02deg, #bbb 20.63%, #fff 99.87%)",
            WebkitBackgroundClip: "text",
            backgroundColor: "text",
            WebkitTextFillColor: "transparent",
            fontSize: 35,
          }}
        >
          Your coding year in review
        </div>
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          transform:
            layout === "short"
              ? "translateY(-200px) rotate(90deg) scale(1.5)"
              : undefined,
        }}
      >
        <div
          style={{
            position: "relative",
            top,
            left,
            transform: `rotate(${rotate}rad) `,
          }}
        >
          <OffthreadVideo
            style={{
              position: "absolute",
              marginLeft: -187,
              marginTop: 210,
              transform: `scale(0.38) rotate(-90deg)`,
            }}
            src={getFlame("blue")}
          />
          <div style={{ position: "absolute" }}>
            <RocketFront rocket="blue" />
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
