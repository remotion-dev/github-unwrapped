import React from "react";
import styles from "./styles.module.css";

export const Input: React.FC<{
  readonly text: string;
  readonly setText: (v: string) => void;
  readonly disabled?: boolean;
  readonly placeHolder?: string;
  readonly style?: React.CSSProperties;
  readonly invalid?: boolean;
  readonly className?: string;
}> = ({ text, setText, disabled, placeHolder, style, invalid, className }) => {
  return (
    <input
      className={[
        className ? className : undefined,
        styles.input,
        invalid ? styles.invalid : undefined,
      ].join(" ")}
      disabled={disabled}
      name="title"
      autoFocus
      value={text}
      onChange={(v) => setText(v.target.value)}
      placeholder={placeHolder}
      style={style}
    />
  );
};
