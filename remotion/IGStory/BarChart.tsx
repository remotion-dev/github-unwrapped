import React from "react";
import { z } from "zod";
import {
  PANE_BACKGROUND,
  PANE_BORDER,
  PANE_TEXT_COLOR,
} from "../TopLanguages/Pane";

const Bar: React.FC<{
  readonly progress: number;
  readonly letter: string;
  readonly most: boolean;
}> = ({ progress, letter, most }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        height: "100%",
      }}
    >
      <div
        style={{
          height: 150 * progress,
          width: 30,
          background: most ? PANE_TEXT_COLOR : PANE_BACKGROUND,
          border: PANE_BORDER,
          borderRadius: 10,
          marginBottom: 10,
        }}
      />
      <div
        style={{
          fontFamily: "Mona Sans",
          fontWeight: "bold",
          marginLeft: 3,
          color: PANE_TEXT_COLOR,
        }}
      >
        {letter}
      </div>
    </div>
  );
};

const schema = z.array(z.number());

export const BarChart: React.FC<{
  readonly graphData: z.infer<typeof schema>;
}> = ({ graphData }) => {
  const highest = Math.max(...graphData.map((g) => g));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: 20,
        transform: "scale(0.8)",
      }}
    >
      {graphData.map((_, i) => {
        return (
          <Bar
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            progress={_ / highest}
            letter={["M", "T", "W", "T", "F", "S", "S"][i]}
            most={i === 0}
          />
        );
      })}
    </div>
  );
};
