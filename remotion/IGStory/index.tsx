import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import type { z } from "zod";
import type { ogImageSchema } from "../../src/config";
import { Gradient } from "../Gradients/NativeGradient";
import { Overlay } from "./Overlay";

export const IgStoryContent: React.FC<z.infer<typeof ogImageSchema>> = ({
  issues,
  contributionData: graphData,
  stars,
  pullRequests,
  weekdays,
  login,
  topLanguage,
  longestStreak,
  totalContributions,
}) => {
  return (
    <AbsoluteFill>
      <Overlay
        contributionData={graphData}
        issues={issues}
        login={login}
        weekdays={weekdays}
        pullRequests={pullRequests}
        stars={stars}
        topLanguage={topLanguage}
        longestStreak={longestStreak}
        totalContributions={totalContributions}
      />
    </AbsoluteFill>
  );
};

export const IgStory: React.FC<z.infer<typeof ogImageSchema>> = (props) => {
  return (
    <AbsoluteFill>
      <AbsoluteFill>
        <Gradient gradient="blueRadial" />
      </AbsoluteFill>
      <AbsoluteFill>
        <Img
          style={{
            height: 1500,
            position: "absolute",
            top: 1350,
            marginLeft: -150,
            transform: `rotate(5deg)`,
          }}
          src={staticFile("shining.png")}
        />
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          transform: `matrix3d(1.907027, 0.231449, 0, 0.000273, 
      -0.004041, 1.552152, 0, -0.000021, 
      0, 0, 1, 0, 
      127, 192, 0, 1)`,
          width: 600,
          height: 900,
          marginLeft: -100,
          marginTop: -0,
          transformOrigin: "0 0 0",
        }}
      >
        <IgStoryContent {...props} />
      </AbsoluteFill>
      <AbsoluteFill>
        <div
          style={{
            backgroundImage:
              "linear-gradient(270.02deg, #d9d9ff 3.63%, #fff 99.87%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Mona Sans",
            fontSize: 50,
            textAlign: "center",
            paddingTop: 60,
            fontWeight: "bolder",
          }}
        >
          #GitHubUnwrapped
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
