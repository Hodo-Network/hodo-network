import clsx from 'clsx';

export interface PureBadgeProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'ghost'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  variant?: 'outline';
  label?: string;
}

export const PureBadge = ({
  size,
  color,
  variant,
  label,
  ...props
}: PureBadgeProps) => {
  const sizes: { [key: string]: string } = {
    xs: 'badge-xs',
    sm: 'badge-sm',
    md: 'badge-md',
    lg: 'badge-lg',
  };

  const colors: { [key: string]: string } = {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    accent: 'badge-accent',
    ghost: 'badge-ghost',
    info: 'badge-info',
    success: 'badge-success',
    warning: 'badge-warning',
    error: 'badge-error',
  };

  const variants: { [key: string]: string } = {
    outline: 'badge-outline',
  };

  return (
    <span
      className={clsx(
        'badge',
        color && colors[color],
        size && sizes[size],
        variant && variants[variant]
      )}
      {...props}>
      {label}
    </span>
  );
};
