export interface MenuOpenIconProps {
  className?: string;
  props?: any;
}

export const MenuOpenIcon = ({
  className,
  props,
}: MenuOpenIconProps) => {
  return (
    <svg
      viewBox='0 0 24 18'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}>
      <path d='M11 16H23C23.552 16 24 16.448 24 17C24 17.552 23.552 18 23 18H11C10.448 18 10 17.552 10 17C10 16.448 10.448 16 11 16Z'></path>
      <path d='M23 2H11C10.448 2 10 1.552 10 1C10 0.448 10.448 0 11 0H23C23.552 0 24 0.448 24 1C24 1.552 23.552 2 23 2Z'></path>
      <path d='M0 9L7 3V8H23C23.552 8 24 8.448 24 9C24 9.552 23.552 10 23 10H7V15L0 9Z'></path>
    </svg>
  );
};
