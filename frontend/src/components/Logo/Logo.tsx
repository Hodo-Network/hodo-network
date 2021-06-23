import React from "react";
import { StyledLogo } from "./styles";

export interface LogoProps {
  img: string;
  alt: string;
}

export const Logo: React.FC<LogoProps> = ({ img, alt }) => {
  return <StyledLogo src={img} alt={alt} className='h-6 w-auto' />;
};
