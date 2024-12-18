import React, { useMemo } from "react";
import {
  AbsoluteFill,
  OffthreadVideo,
  interpolate,
  useCurrentFrame,
} from "remotion";
import type { Rocket } from "../../src/config";
import { getFlame, takeOffSpeedFucntion } from "../Opening/TakeOff";
import { RocketSide } from "../Spaceship";
import { remapSpeed } from "../TopLanguages/remap-speed";

export const LandingRocket: React.FC<{
  readonly rocket: Rocket;
}> = ({ rocket }) => {
  const frame = useCurrentFrame();

  const reversedFrame = 75 - frame;
  const acceleratedFrame = remapSpeed(reversedFrame, takeOffSpeedFucntion);

  const finalOffset = useMemo(() => {
    return 420;
  }, []);

  const rocketOffset = interpolate(
    acceleratedFrame,
    [0, 75],
    [finalOffset, -500],
  );

  const height = interpolate(frame, [30, 70], [400, 30]);
  const marginTop = height / 2;

  const shadowTop = interpolate(frame, [0, 75], [150, 0], {
    extrapolateRight: "clamp",
  });

  const shadow = interpolate(frame, [0, 50], [0, 50], {
    extrapolateRight: "clamp",
  });

  return (
    <>
      <AbsoluteFill
        style={{
          backgroundColor: "rgba(0,0,0,0.2)",
          height: shadow * 1.5,
          width: shadow * 6,
          top: 780 - shadowTop,
          left: 545 - shadow * 3,
          borderRadius: "50%",
        }}
      />
      <AbsoluteFill
        style={{
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          marginTop: rocketOffset,
          transform: "scale(0.7)",
        }}
      >
        <AbsoluteFill
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <OffthreadVideo
            style={{
              width: height,
              height: 100,
              objectFit: "fill",
              transform: `rotate(-90deg)`,
              marginTop: -500 + marginTop,
              marginLeft: 20,
            }}
            startFrom={80}
            muted
            transparent
            src={getFlame(rocket)}
          />
        </AbsoluteFill>
        <div
          style={{
            width: 400,
            position: "relative",
            top: -600,
          }}
        >
          <RocketSide rocket={rocket} />
        </div>
      </AbsoluteFill>
    </>
  );
};
