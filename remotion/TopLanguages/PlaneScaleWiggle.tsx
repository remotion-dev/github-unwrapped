import { noise2D } from "@remotion/noise";
import type { SpringConfig } from "remotion";
import {
  AbsoluteFill,
  Audio,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { z } from "zod";
import { languageSchema, rocketSchema } from "../../src/config";
import { Gradient } from "../Gradients/NativeGradient";
import { Noise } from "../Noise";
import { isMobileDevice } from "../Opening/devices";
import { FlyRocketIntoPlanet } from "./FlyRocketIntoPlanet";
import { LanguagePlanet } from "./Language";
import { LanguageDescription } from "./LanguageDescription";
import { computePlanetInfo } from "./constants";
import { enterDirectionSchema } from "./corner";

export const wiggleSchema = z.object({
  language: languageSchema,
  position: z.number(),
  enterDirection: enterDirectionSchema,
  rocket: rocketSchema,
});

export const TOP_LANGUAGES_EXIT_DURATION = 12;
export const WIGGLE_EXIT_SPRING_CONFIG: Partial<SpringConfig> = {
  damping: 200,
};
export const WIGGLE_EXIT_DURATION = 30;

export const PlanetScaleWiggle: React.FC<z.infer<typeof wiggleSchema>> = ({
  language,
  position,
  enterDirection,
  rocket,
}) => {
  const planetInfo = computePlanetInfo(language);

  const { fps, durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();

  const delay = 25;

  const shrinkSpring = spring({
    frame,
    fps,
    config: {
      damping: 14,
    },
    durationInFrames: 20,
    delay: delay - 1,
  });

  const growSpring = spring({
    frame,
    fps,
    delay,
  });

  const planetScale = 1 - shrinkSpring * 0.9 + growSpring * 0.9;
  const isAction = delay <= frame && frame < 45;
  const noise = noise2D("seed", frame / 10, 1) * 10;

  const rotate = isAction ? noise : 0;

  const exitProgress = spring({
    fps,
    frame,
    config: WIGGLE_EXIT_SPRING_CONFIG,
    durationInFrames: WIGGLE_EXIT_DURATION,
    delay: durationInFrames - TOP_LANGUAGES_EXIT_DURATION,
  });

  const distance = interpolate(exitProgress, [0, 1], [1, 0.000000005], {});
  const scaleDivided = 1 / distance;
  const translateX = (scaleDivided - 1) * 200;

  return (
    <AbsoluteFill
      style={{
        transform: `scale(${scaleDivided}) translateY(${translateX}px)`,
      }}
    >
      {isMobileDevice() ? null : (
        <Sequence from={10}>
          <Audio src={staticFile("wham.mp3")} />
        </Sequence>
      )}
      <AbsoluteFill style={{ opacity: planetInfo.opacity }}>
        <Gradient gradient={planetInfo.gradient} />
      </AbsoluteFill>
      <AbsoluteFill
        style={{ opacity: interpolate(exitProgress, [0, 0.3], [1, 0]) }}
      >
        <Noise translateX={0} translateY={0} />
      </AbsoluteFill>
      <FlyRocketIntoPlanet rocket={rocket} enterDirection={enterDirection} />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          scale: "0.7",
        }}
      >
        <LanguagePlanet
          planetInfo={planetInfo}
          style={{
            width: 800,
            scale: String(planetScale),
            rotate: rotate + "deg",
          }}
        />
      </AbsoluteFill>
      <Sequence from={10}>
        <LanguageDescription
          delay={10}
          duration={90}
          language={language}
          position={position}
        />
      </Sequence>
    </AbsoluteFill>
  );
};
