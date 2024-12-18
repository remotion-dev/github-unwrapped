import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

export const PaneEffect: React.FC<{
  readonly children: React.ReactNode;
  readonly innerRadius: number;
  readonly style: React.CSSProperties;
  readonly whiteHighlightOpacity: number;
  readonly pinkHighlightOpacity: number;
  readonly padding: number;
}> = ({
  children,
  innerRadius,
  style,
  whiteHighlightOpacity,
  pinkHighlightOpacity,
  padding,
}) => {
  return (
    <div
      style={{
        position: "relative",
        ...style,
      }}
    >
      <AbsoluteFill>
        <div
          style={{
            height: "100%",
            width: "100%",
            zIndex: -1,
            opacity: whiteHighlightOpacity,
          }}
        >
          <Img
            style={{
              height: "130%",
              marginTop: "-5%",
              width: "100%",
              objectFit: "fill",
              scale: String(1.45),
              opacity: 0.2,
            }}
            src={staticFile("WhiteHighlight.png")}
          />
        </div>
      </AbsoluteFill>
      <AbsoluteFill>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: -1,
          }}
        >
          <Img
            style={{
              height: "100%",
              marginTop: "-5%",
              aspectRatio: "1 / 1",
              scale: "4",
              opacity: pinkHighlightOpacity,
            }}
            src={staticFile("PinkHighlight.png")}
          />
        </div>
      </AbsoluteFill>

      <div
        style={{
          padding,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          border: padding === 0 ? "0" : "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: innerRadius + padding,
        }}
      >
        {children}
      </div>
    </div>
  );
};
