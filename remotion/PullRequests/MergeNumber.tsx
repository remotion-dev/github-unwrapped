import React from "react";
import { PANE_TEXT_COLOR } from "../TopLanguages/Pane";

export const MergeNumber: React.FC<{
  readonly num: number;
}> = ({ num }) => {
  return (
    <div
      style={{
        fontSize: 80,
        fontFamily: "Mona Sans",
        fontWeight: "800",
        marginLeft: 10,
        color: PANE_TEXT_COLOR,
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {num}
    </div>
  );
};
