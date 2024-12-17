import React, { useMemo } from "react";
import {
  PANE_BACKGROUND_OPAQUE,
  PANE_BORDER,
  PANE_TEXT_COLOR,
} from "../TopLanguages/Pane";
import { MergeIcon } from "./MergeIcon";
import { MergeNumber } from "./MergeNumber";
import { RemotionShineEffect } from "./RemotionShineEffect";
import { PATH_TARGET } from "./make-random-path";

const SIZE = 300;
const PADDING = 30;

const outer: React.CSSProperties = {
  padding: PADDING,
  position: "absolute",
  transform: "translate(-50%, -50%)",
  left: PATH_TARGET.x - PADDING,
  top: PATH_TARGET.y - PADDING,
  height: SIZE + PADDING * 2,
  width: SIZE + PADDING * 2,
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
};

export const MergeStat: React.FC<{
  readonly num: number;
  readonly totalNum: number;
}> = ({ num, totalNum }) => {
  const container: React.CSSProperties = useMemo(() => {
    return {
      backgroundColor: PANE_BACKGROUND_OPAQUE,
      border: PANE_BORDER,
      height: SIZE,
      width: SIZE,
      borderRadius: "50%",
      left: PATH_TARGET.x,
      top: PATH_TARGET.y,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center",
    };
  }, []);

  const inner: React.CSSProperties = useMemo(() => {
    return {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginTop: 10,
    };
  }, []);

  const subtitle: React.CSSProperties = useMemo(() => {
    return {
      fontSize: 24,
      fontFamily: "Mona Sans",
      fontWeight: "800",
      color: PANE_TEXT_COLOR,
    };
  }, []);

  return (
    <div style={outer}>
      <div style={container}>
        <RemotionShineEffect
          height={300}
          width={300}
          id="pullrequest"
          borderRadius={150}
        />
        <div style={inner}>
          <MergeIcon />
          <MergeNumber num={num} />
        </div>
        <div style={subtitle}>
          pull {totalNum === 1 ? "request" : "requests"}
          <br />
          merged
        </div>
      </div>
    </div>
  );
};
