import { lighten } from "polished";
import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BACKGROUND_COLOR, BASE_COLOR } from "../src/palette";

const subtitle: React.CSSProperties = {
  textAlign: "center",
  fontSize: 80,
  fontFamily: "Jelle",
  color: BASE_COLOR,
  fontWeight: "bold",
  marginTop: 12,
};

export const EndCard2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const chars = "githubunwrapped";
  const off = chars.length * 4 + 14;
  const bigspr = spring({
    frame: frame - off,
    fps,
    config: {
      mass: 0.3,
      damping: 200,
    },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: lighten(0.08, BACKGROUND_COLOR),
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AbsoluteFill
        style={{
          justifyContent: "center",
        }}
      >
        <div style={subtitle}>Get yours at</div>
        <div
          style={{
            ...subtitle,
            transform: `scale(${interpolate(bigspr, [0, 1], [0.9, 1])})`,
          }}
        >
          {chars.split("").map((char, i) => {
            const spr = spring({
              frame: frame - i * 4,
              fps,
              config: {
                mass: 0.1,
                damping: 200,
              },
            });
            return (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  transform: `translateX(${interpolate(
                    spr,
                    [0, 1],
                    [1200, 0]
                  )}px)`,
                }}
              >
                {char}
              </span>
            );
          })}
          <span
            style={{
              display: "inline-block",
              opacity: `${interpolate(bigspr, [0, 1], [0, 1])}`,
            }}
          >
            .com
          </span>
        </div>
        <div
          style={{
            height: 40,
          }}
        ></div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
