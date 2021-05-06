import { FC } from "react";
import { StyledLogo } from "./styles";

const Logo: FC<{ img: string; alt: string }> = ({ img, alt }) => (
  <StyledLogo src={img} alt={alt} className='h-6 w-auto' />
);

export default Logo;
