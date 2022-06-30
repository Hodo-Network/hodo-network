import clsx from "clsx";

export interface PureBadgeProps {
  size?: "xs" | "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "accent" | "ghost" | "info" | "success" | "warning" | "error";
  variant?: "outline";
  label: string;
}

export const PureBadge = ({
  size = "md",
  color = "primary",
  variant,
  label,
  ...props
}: PureBadgeProps) => {
  const sizes: { [key: string]: string; } = {
    xs: "badge-xs",
    sm: "badge-sm",
    md: "badge-md",
    lg: "badge-lg",
  };

  const colors: { [key: string]: string; } = {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    accent: 'badge-accent',
    ghost: 'badge-ghost',
    info: 'badge-info',
    success: 'badge-success',
    warning: 'badge-warning',
    error: 'badge-error',
  };

  return (
    <span
      className={clsx(
        "badge",
        colors[color],
        sizes[size],
      )}
      {...props}>
      {label}
    </span>
  );
};
