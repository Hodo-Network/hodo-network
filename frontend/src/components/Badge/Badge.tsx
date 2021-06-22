import React from "react";

export interface BadgeProps {
  size?: "small" | "medium" | "large";
  color?: string;
  label: string;
}

export const Badge: React.FC<BadgeProps> = ({
  size = "medium",
  color = "gray",
  label,
  ...props
}) => {
  return (
    <span
      className={[
        "inline-flex items-center rounded-md font-medium capitalize badge",
        `badge--${size}`,
        `badge--${color}`,
      ].join(" ")}
      {...props}>
      {label}
    </span>
  );
};
