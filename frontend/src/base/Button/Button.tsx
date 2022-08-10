import clsx from 'clsx';
import { ElementType } from 'react';
import { PolymorphicComponentProp } from '../../typings/polymorphic';

export type ButtonProps = {
  active?: boolean;
  disabled?: boolean;
  loading?: boolean;
  animation?: 'no-animation' | string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  variant?: 'ghost' | 'link' | 'outline' | 'glass';
  shape?: 'wide' | 'block' | 'circle' | 'square';
  util?: string;
};

export const Button = <C extends ElementType = 'button'>({
  as,
  active,
  disabled: _disabled,
  loading,
  animation,
  size = 'md',
  color,
  variant,
  shape,
  children,
  util,
  ...rest
}: PolymorphicComponentProp<C, ButtonProps>) => {
  const Component = as || 'button';

  const activeCls = active ? 'btn-active' : '';
  const loadingCls = loading ? 'loading' : '';
  const disabled = _disabled || loading;
  const disabledCls = disabled ? 'btn-disabled' : '';

  const sizes: { [key: string]: string } = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
  };

  const colors: { [key: string]: string } = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    info: 'btn-info',
    success: 'btn-success',
    warning: 'btn-warning',
    error: 'btn-error',
  };

  const variants: { [key: string]: string } = {
    ghost: 'btn-ghost',
    link: 'btn-link',
    outline: 'btn-outline',
    glass: 'glass',
  };

  const shapes: { [key: string]: string } = {
    wide: 'btn-wide',
    block: 'btn-block',
    circle: 'btn-circle',
    square: 'btn-square',
  };

  return (
    <Component
      className={clsx(
        'btn',
        sizes[size],
        color && colors[color],
        variant && variants[variant],
        shape && shapes[shape],
        activeCls,
        loadingCls,
        disabledCls,
        animation,
        util
      )}
      disabled={disabled}
      {...rest}>
      {children}
    </Component>
  );
};
