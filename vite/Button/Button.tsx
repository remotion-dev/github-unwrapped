import type { ButtonHTMLAttributes } from "react";
import React, { forwardRef } from "react";
import { Spacing } from "../Spacing";
import { Spinner } from "../Spinner/Spinner";
import { HoverEffect } from "./HoverEffect";
import styles from "./styles.module.css";

const ButtonForward: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  {
    readonly onClick?: () => void;
    readonly disabled?: boolean;
    readonly children: React.ReactNode;
    readonly loading?: boolean;
    readonly primary?: boolean;
    readonly style?: React.CSSProperties;
    readonly className?: string;
    readonly type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    readonly hoverEffect?: boolean;
  }
> = (
  {
    onClick,
    disabled,
    children,
    loading,
    primary,
    style,
    className,
    type,
    hoverEffect,
  },
  ref,
) => {
  return (
    <button
      ref={ref}
      // eslint-disable-next-line react/button-has-type
      type={type ?? "button"}
      className={[
        styles.button,
        primary ? styles.primaryButton : styles.secondaryButton,
        className ? className : undefined,
      ].join(" ")}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {hoverEffect ? <HoverEffect /> : null}
      {loading && (
        <>
          <Spinner size={20} />
          <Spacing />
        </>
      )}
      {children}
    </button>
  );
};

export const Button = forwardRef(ButtonForward);
