import React from "react";
import { AbsoluteFill } from "remotion";

export const RadialGradient: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        zIndex: -1,
        background:
          "linear-gradient(180deg, #060842 0%, #474280 50%, #396A91 100%)",
      }}
    />
  );
};
