import React from "react";

export const ContributionNumber: React.FC<{
  readonly currentNumber: number;
  readonly suffix: string;
}> = ({ currentNumber, suffix }) => {
  return (
    <div
      style={{
        color: "white",
        fontFamily: "Mona Sans",
        fontSize: 40,
        fontWeight: 500,
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {currentNumber}
      {suffix}
    </div>
  );
};

export const ContributionLabel: React.FC<{
  readonly children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div
      style={{
        color: "white",
        fontFamily: "Mona Sans",
        fontSize: 20,
        fontWeight: 500,
      }}
    >
      {children}
    </div>
  );
};
