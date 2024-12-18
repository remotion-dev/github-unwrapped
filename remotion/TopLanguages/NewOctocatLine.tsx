import { evolvePath } from "@remotion/paths";
import React from "react";

const getLeftColor = () => {
  return ["#3772A7", "#8EAFB2"] as const;
};

export const NewOctocatLine: React.FC<{
  readonly progress: number;
  readonly d: string;
}> = ({ progress, d }) => {
  const { strokeDasharray, strokeDashoffset } = evolvePath(progress, d);

  return (
    <>
      <path
        d={d}
        stroke="url(#octocatgradient)"
        strokeWidth="4"
        strokeMiterlimit="10"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
      />
      <defs>
        <linearGradient
          id="octocatgradient"
          x1="1118.7"
          y1="720.3"
          x2="1450.77"
          y2="720.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={getLeftColor()[0]} />
          <stop offset="1" stopColor={getLeftColor()[1]} />
        </linearGradient>
      </defs>
    </>
  );
};
