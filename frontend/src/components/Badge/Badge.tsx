export interface PureBadgeProps {
  size?: "small" | "medium" | "large";
  color?: string;
  label: string;
}

export const PureBadge = ({
  size = "medium",
  color = "gray",
  label,
  ...props
}: PureBadgeProps) => {
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
