import type { ReactNode } from "react";
import React from "react";
import styles from "./styles.module.css";

export const Box: React.FC<{
  readonly children: ReactNode;
  readonly style?: React.CSSProperties;
  readonly className?: string;
}> = ({ style, className, children }) => {
  return (
    <div className={[styles.box, className].join(" ")} style={style}>
      <div className={styles.boxinner}>{children}</div>
    </div>
  );
};
