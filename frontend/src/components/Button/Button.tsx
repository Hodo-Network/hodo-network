export interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  disabled?: boolean;
  children?: any;
}

export const Button = ({
  primary = false,
  size = "medium",
  disabled = false,
  children,
  ...props
}: ButtonProps) => {
  const mode = primary ? "primary" : "secondary";
  return (
    <button
      type='button'
      className={["btn", `btn--${mode}`, `btn--${size}`].join(" ")}
      disabled={disabled}
      {...props}>
      {children}
    </button>
  );
};
