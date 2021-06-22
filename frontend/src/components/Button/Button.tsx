import React from "react";

export interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  disabled?: boolean;
  backgroundColor?: string;
  children: any;
}

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  disabled = false,
  backgroundColor,
  children,
  ...props
}) => {
  const mode = primary ? "primary" : "secondary";
  return (
    <button
      type='button'
      className={["btn", `btn--${mode}`, `btn--${size}`].join(" ")}
      style={{ backgroundColor }}
      disabled={disabled}
      {...props}>
      {children}
    </button>
  );
};
