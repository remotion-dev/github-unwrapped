import React from "react";
import { PANE_TEXT_COLOR } from "../TopLanguages/Pane";

export const Issues: React.FC<{
  readonly issues: number;
}> = ({ issues }) => {
  return (
    <div
      style={{
        color: PANE_TEXT_COLOR,
        fontFamily: "Mona Sans",
        fontSize: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "700",
        borderBottom: `1px solid rgb(183, 171, 239)`,
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
      <div style={{ marginRight: 20, marginLeft: 10 }}>{issues}</div>
      <div style={{ fontSize: 40, fontWeight: "500" }}>Issues closed</div>
    </div>
  );
};
