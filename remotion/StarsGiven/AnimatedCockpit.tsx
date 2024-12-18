import React, { useMemo } from "react";
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { TABLET_SCENE_HIDE_ANIMATION } from "../Productivity/Tablet";
import { PullRequests } from "../PullRequests/PullRequests";
import { Cockpit } from "./Cockpit";
import type { RepoText } from "./HeadsUpDisplay";
import { getTransitionToPullRequest } from "./transition-to-pull-request";

export const AnimatedCockpit: React.FC<{
  readonly xShake: number;
  readonly yShake: number;
  readonly rotationShake: number;
  readonly totalPullRequests: number;
  readonly repoText: RepoText | null;
  readonly starCount: number;
  readonly totalStarCount: number;
  readonly durationOfStars: number;
  readonly timeUntilTabletHides: number;
}> = ({
  xShake,
  yShake,
  rotationShake,
  totalPullRequests,
  repoText,
  starCount,
  totalStarCount,
  durationOfStars,
  timeUntilTabletHides,
}) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const entryProgress = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
    delay: -6,
  });

  const start = timeUntilTabletHides + TABLET_SCENE_HIDE_ANIMATION - 20;
  const transitionToPullRequest = getTransitionToPullRequest({
    start,
    frame,
    fps,
  });

  const distance = interpolate(entryProgress, [0, 1], [0.000000005, 1], {});
  const scaleDivided = 1 / distance;

  const shake: React.CSSProperties = useMemo(() => {
    return {
      scale: String(scaleDivided),
      transform: `rotate(${rotationShake}rad) scale(${
        // +0.05 so noise doesn't cut off
        scaleDivided + 0.05
      }) translate(${xShake}px, ${yShake}px)`,
    };
  }, [rotationShake, scaleDivided, xShake, yShake]);

  const durationOfStarsWithShake = durationOfStars + 30;

  return (
    <AbsoluteFill style={shake}>
      <Sequence from={timeUntilTabletHides}>
        <PullRequests totalPullRequests={totalPullRequests} />
      </Sequence>
      <Sequence
        durationInFrames={471}
        style={{ scale: String(transitionToPullRequest) }}
      >
        <Cockpit
          durationOfStarsWithShake={durationOfStarsWithShake}
          repoText={repoText}
          starCount={starCount}
          totalStarCount={totalStarCount}
        />
      </Sequence>
    </AbsoluteFill>
  );
};
