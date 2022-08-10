import { default as cx } from 'clsx';

export const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(' ');
};

export default cx;
