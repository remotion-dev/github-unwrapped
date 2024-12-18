import React from "react";
import { AbsoluteFill } from "remotion";

export type RepoText = {
  text: string;
  text2: string;
  opacity: number;
};

export const HeadsUpDisplay: React.FC<{
  readonly textToDisplay: RepoText | null;
}> = ({ textToDisplay }) => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 500,
          height: 100,
          marginTop: -500,
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          lineHeight: "40px",
          fontSize: textToDisplay
            ? textToDisplay.text.length > 25
              ? 22
              : textToDisplay.text.length > 15
                ? 30
                : 40
            : 40,
          textAlign: "center",
        }}
      >
        <span
          style={{
            opacity: 0.6,
            marginTop: 5,
          }}
        >
          <div
            style={{
              opacity: textToDisplay ? textToDisplay.opacity : 1,
              fontFamily: "Seven Segment",
              fontWeight: "bold",
              maxWidth: 400,
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontSize: 20,
              lineHeight: 1.5,
            }}
          >
            {textToDisplay ? textToDisplay.text2 : ""}
          </div>
          <div
            style={{
              opacity: textToDisplay ? textToDisplay.opacity : 1,
              fontFamily: "Seven Segment",
              fontWeight: "bold",
              maxWidth: 400,
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {textToDisplay ? textToDisplay.text : "repos starred"}
          </div>
        </span>
      </div>
    </AbsoluteFill>
  );
};
