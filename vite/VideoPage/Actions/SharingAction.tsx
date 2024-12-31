import type { ReactNode } from "react";
import { PANE_TEXT_COLOR } from "../../../remotion/TopLanguages/Pane";
import { HoverEffect } from "../../Button/HoverEffect";
import styles from "./styles.module.css";

export const SharingActions: React.FC<{
  icon?: (params: { width: number; color: string }) => ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
}> = (props) => {
  return (
    <div
      className={[styles.wrapper, props.className].join(" ")}
      onClick={props.onClick}
    >
      <HoverEffect />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "0 16px",
          fontWeight: 500,
        }}
      >
        {props.icon && (
          <div className={styles.iconContainer}>
            {props.icon({ width: 16, color: "white" })}
          </div>
        )}
        {props.label}
      </div>
    </div>
  );
};

export const SharingAction: React.FC<{
  icon?: (params: { width: number; color: string }) => ReactNode;
  label: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
}> = (props) => {
  return (
    <button
      type="button"
      style={{
        height: 48,
        ...props.style,
        background: "linear-gradient(292.9deg, #D329AB 9.44%, #312E6A 43.46%)",
        padding: 2,
        border: 0,
      }}
      className={props.className}
      onClick={props.onClick}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          height: "100%",
          borderRadius: 7,
          fontWeight: "600",
          backgroundColor: "#D3CFE8",
          color: PANE_TEXT_COLOR,
          padding: "0px 10px"
        }}
      >
        {props.icon && (
          <div className={styles.iconContainer}>
            {props.icon({ width: 16, color: "white" })}
          </div>
        )}
        {props.label}
      </div>
    </button>
  );
};
