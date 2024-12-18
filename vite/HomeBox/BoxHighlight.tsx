import React from "react";
import { AbsoluteFill } from "remotion";

export const BoxHighlight: React.FC = () => {
  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <AbsoluteFill
        style={{
          backgroundColor: "#fff",
          borderRadius: "30px",
          filter: "blur(30px)",
          scale: String(1.1),
          opacity: 0.2,
          zIndex: -1,
        }}
      />
    </AbsoluteFill>
  );
};

export const PinkHighlightBox: React.FC = () => {
  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <div
        style={{
          backgroundColor: "pink",
          borderRadius: "50%",
          display: "block",
          aspectRatio: "1 / 1",
          position: "relative",
          width: "100%",
          scale: String(1),
          filter: "blur(200px)",
          marginTop: "-45%",
          rotate: "90deg",
          opacity: 0.3,
          zIndex: -1,
        }}
      />
    </AbsoluteFill>
  );
};
