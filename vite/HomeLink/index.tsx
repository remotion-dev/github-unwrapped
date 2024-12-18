import type { ReactNode } from "react";
import React from "react";
import styles from "./styles.module.css";

export const HomeLink: React.FC<{
  readonly label: string;
  readonly icon: (params: {
    height: number;
    width: number;
    color: string;
  }) => ReactNode;
  readonly href: string;
}> = ({ label, icon, href }) => {
  return (
    <a className={styles.container} style={{}} href={href}>
      {icon({ height: 16, width: 16, color: "currentcolor" })}
      {label}
    </a>
  );
};
