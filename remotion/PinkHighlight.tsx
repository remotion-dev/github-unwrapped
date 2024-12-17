import React from "react";
import { AbsoluteFill } from "remotion";

export const PinkHighlight: React.FC = () => {
  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          backgroundColor: "pink",
          borderRadius: "50%",
          filter: "blur(140px)",
          height: "33.3333%",
          width: "33.3333%",
          marginLeft: "33.33333%",
          marginTop: "33.33333%",
        }}
      />
    </AbsoluteFill>
  );
};
