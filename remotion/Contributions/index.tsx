/* eslint-disable react/no-array-index-key */
import {
  AbsoluteFill,
  Audio,
  Easing,
  Img,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import React, { useMemo } from "react";
import type { Planet, Rocket } from "../../src/config";
import { appearDelays } from "../Contributions/compute-positions";
import { Gradient } from "../Gradients/NativeGradient";
import { IssueNumber } from "../Issues/IssueNumber";
import { FPS } from "../Issues/make-ufo-positions";
import { accentColorToGradient } from "../Opening/TitleImage";
import { isMobileDevice } from "../Opening/devices";
import { PaneEffect } from "../PaneEffect";
import { PANE_BACKGROUND } from "../TopLanguages/Pane";
import * as FrontRocketSource from "../TopLanguages/svgs/FrontRocketSource";
import { PlanetEntrance } from "./PlanetEntrance";

export const CONTRIBUTIONS_SCENE_DURATION = 7.5 * FPS;
export const CONTRIBUTIONS_SCENE_EXIT_TRANSITION = 30;
export const CONTRIBUTIONS_SCENE_ENTRANCE_TRANSITION = 3;

export const contributionSceneAssets = (): string[] => [];

const COUNT = 364;

const ROWS = 7;
const COLUMNS = 364 / ROWS;

const SIZE = 18;

const GRID_WIDTH = COLUMNS * SIZE;
const GRID_HEIGHT = ROWS * SIZE;

// const MAX_CONTRIBUTIONS = 16;

const TRANSITION_GLOW = 45;
const START_SPREAD = TRANSITION_GLOW + 10;

const FADE_OUT_START = 80;
const FADE_OUT_DURATION = 20;

const mapRowToMove: Record<number, number> = {
  0: SIZE * 3,
  1: SIZE * 2,
  2: Number(SIZE),
  3: 0,
  4: SIZE * -1,
  5: SIZE * -2,
  6: SIZE * -3,
};

const Dot: React.FC<{
  readonly i: number;
  readonly data: number;
  readonly targetColumn: number;
  readonly frame: number;
  readonly maxContributions: number;
}> = ({ i, data, targetColumn, maxContributions, frame }) => {
  const col = Math.floor(i / 7);
  const row: number = i % 7;

  let top = 0;
  let left = 0;
  let opacity = Math.max(
    0.1,
    data >= maxContributions
      ? 1
      : data > 0
        ? Math.max(data / maxContributions, 0.25)
        : 0,
  );
  const borderRadius = 4;

  let size = SIZE;

  const color = `#070842`;

  const startAbsolute = START_SPREAD + 15;

  if (frame < TRANSITION_GLOW) {
    let f = (targetColumn - col) / (COLUMNS / 3);

    f = Math.min(...[Math.abs(f), 1]);

    top = col >= targetColumn ? mapRowToMove[row] : (1 - f) * mapRowToMove[row];
    opacity = col >= targetColumn ? 0 : opacity;
  } else if (frame < START_SPREAD) {
    size = interpolate(
      frame,
      [TRANSITION_GLOW, START_SPREAD],
      [SIZE, SIZE * 0.95],
    );
  } else {
    size = SIZE * 0.95;

    const noise = appearDelays[i];

    const moveProgress = interpolate(
      frame,
      [START_SPREAD, noise.delay + 100],
      [0, 1],
      {
        extrapolateRight: "clamp",
        easing: Easing.bezier(0.8, -0.02, 0.32, 1),
      },
    );

    const noiseAngle = Math.atan2(noise.noiseY, noise.noiseX);

    const d = interpolate(
      frame,
      [START_SPREAD + 50, START_SPREAD + 120],
      [400, 1200],
      {},
    );

    const towardsCenter = moveProgress * d;

    const pushFromCenter = Math.sin(noiseAngle + frame / 90) * towardsCenter;
    const pushFromTop = Math.cos(noiseAngle + frame / 100) * towardsCenter;

    const noiseProgress = interpolate(
      frame,
      [startAbsolute, startAbsolute + 10],
      [0, 1],
      {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      },
    );

    const xDelta = noise.noiseX * 300 * noiseProgress;
    const yDelta = noise.noiseY * 10 * noiseProgress;

    left = moveProgress * xDelta + pushFromCenter;
    top = moveProgress * yDelta + pushFromTop;
  }

  return (
    <div
      style={{
        position: "absolute",
        width: SIZE,
        height: SIZE,
        left: col * SIZE,
        top: row * SIZE,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          ...(frame < TRANSITION_GLOW || frame >= startAbsolute
            ? {
                position: "absolute",
                top,
                left,
              }
            : {}),
          width: size,
          height: size,
          opacity,
          padding: 2,
          borderRadius,

          display: "flex",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <div
          style={{
            opacity: 1,
            width: "100%",
            height: "100%",
            backgroundColor: color,
            borderRadius,
          }}
        />
      </div>
    </div>
  );
};

export const ContributionsScene: React.FC<{
  readonly contributionData: number[];
  readonly total: number;
  readonly rocket: Rocket;
  readonly planet: Planet;
}> = ({ contributionData, total, rocket, planet }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  const frame = f / 1.5;

  const targetColumn = interpolate(frame / 0.5, [0, 120], [-33, COLUMNS + 20], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.2, -0.02, 0.32, 1),
  });

  let number = interpolate(frame / 0.5, [25, 85], [0, total]);

  number = number > total ? total : number < 0 ? 0 : number;

  const maxContributions = useMemo(() => {
    return Math.max(...[Math.max(...contributionData), 1]);
  }, [contributionData]);

  const opacity = interpolate(frame, [0, 20, 120, 140], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const numberEnter = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
  });
  const numberTop = interpolate(numberEnter, [0, 1], [250, 0]);

  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity, transform: `rotate(180deg)` }}>
        <Gradient gradient={accentColorToGradient()} />
      </AbsoluteFill>

      <AbsoluteFill>
        {isMobileDevice() ? null : (
          <Sequence>
            <Audio startFrom={10} src={staticFile("contribution-rocket.mp3")} />
          </Sequence>
        )}
        {frame > 80 && <PlanetEntrance planet={planet} frame={frame} />}
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          zIndex: 0,
        }}
      >
        <PaneEffect
          padding={20}
          pinkHighlightOpacity={1}
          whiteHighlightOpacity={1}
          innerRadius={20}
          style={{}}
        >
          <div
            style={{
              width: GRID_WIDTH,
              height: GRID_HEIGHT,
              background: PANE_BACKGROUND,
              padding: 20,
              boxSizing: "content-box",
              borderRadius: 20,
            }}
          />
        </PaneEffect>
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: "relative",
            width: GRID_WIDTH,
            height: GRID_HEIGHT,
          }}
        >
          {new Array(COUNT).fill(0).map((_, i) => (
            <Dot
              key={i}
              frame={frame}
              i={i}
              data={contributionData[i]}
              targetColumn={targetColumn}
              maxContributions={maxContributions}
            />
          ))}
        </div>

        <AbsoluteFill
          style={{
            marginTop: numberTop,
            opacity:
              frame >= FADE_OUT_START &&
              frame < FADE_OUT_START + FADE_OUT_DURATION
                ? (FADE_OUT_DURATION - (frame - FADE_OUT_START)) /
                  FADE_OUT_DURATION
                : frame < FADE_OUT_START
                  ? 1
                  : 0,
          }}
        >
          <IssueNumber
            align="center"
            label="Contributions"
            currentNumber={Math.floor(number)}
            max={total}
          />
        </AbsoluteFill>

        <AbsoluteFill
          style={{
            left: targetColumn * SIZE + 120,
            top: 440,
            position: "absolute",
          }}
        >
          <Img
            src={FrontRocketSource.getFrontRocketSource(rocket)}
            style={{
              width: 732 / 8,
              height: 1574 / 8,
              transform: "rotate(90deg)",
            }}
          />
        </AbsoluteFill>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
