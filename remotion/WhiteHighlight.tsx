import React from "react";
import { AbsoluteFill } from "remotion";

export const WhiteHighlight: React.FC = () => {
  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          backgroundColor: "white",
          borderRadius: "150px",
          filter: "blur(100px)",
          scale: String(0.6),
        }}
      />
    </AbsoluteFill>
  );
};
