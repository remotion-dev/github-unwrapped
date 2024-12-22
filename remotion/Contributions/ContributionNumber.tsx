import React from "react";

interface ContributionNumberProps {
  currentNumber: number;
  suffix: string;
}

export const ContributionNumber: React.FC<ContributionNumberProps> = ({
  currentNumber,
  suffix,
}) => {
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

interface ContributionLabelProps {
  children: React.ReactNode;
}

export const ContributionLabel: React.FC<ContributionLabelProps> = ({
  children,
}) => {
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
