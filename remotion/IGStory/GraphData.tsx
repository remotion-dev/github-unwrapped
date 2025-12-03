import React from "react";
import { interpolateColors } from "remotion";
import { PANE_TEXT_COLOR } from "../TopLanguages/Pane";

const Dot: React.FC<{
  readonly index: number;
  readonly value: number;
  readonly max: number;
}> = ({ index, max, value }) => {
  const row = index % 7;
  const column = Math.floor(index / 7);

  const opacity = Math.max(
    0.1,
    value >= max ? 1 : value > 0 ? Math.max(value / max, 0.25) : 0,
  );

  const activityColor = interpolateColors(
    value,
    [0, Math.max(1, max)],
    ["#202138", "#070842"],
  );

  return (
    <div
      style={{
        height: 7,
        width: 7,
        borderRadius: 1.5,
        backgroundColor: activityColor,
        position: "absolute",
        left: column * 10 + 22,
        top: row * 10 + 18,
        opacity,
      }}
    />
  );
};

const Stat: React.FC<{
  readonly data: number;
  readonly label: string;
  readonly align: "left" | "right";
}> = ({ data, label, align }) => {
  return (
    <div
      style={{
        color: PANE_TEXT_COLOR,
        fontFamily: "Mona Sans",
        textAlign: align,
      }}
    >
      <div style={{ fontSize: 20, fontWeight: "bolder" }}>{data}</div>
      <div style={{ fontSize: 14 }}>{label}</div>
    </div>
  );
};

export const ContributionGraphic: React.FC<{
  readonly graphData: number[];
  readonly totalContributions: number;
  readonly longestStreak: number;
  readonly login: string;
}> = ({ graphData, totalContributions, longestStreak, login }) => {
  return (
    <div
      style={{
        paddingTop: 24,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          paddingRight: 20,
          paddingLeft: 20,
        }}
      >
        <Stat align="left" data={2025} label={login} />
        <div style={{ flex: 1 }} />
        <Stat align="right" data={longestStreak} label="Longest streak" />
        <div style={{ width: 30 }} />
        <Stat align="right" data={totalContributions} label="Contributions" />
      </div>
      <div style={{ position: "relative" }}>
        {graphData.map((g, i) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Dot key={i} max={Math.max(...graphData)} value={g} index={i} />
          );
        })}
      </div>
    </div>
  );
};
