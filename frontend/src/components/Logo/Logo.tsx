import { StyledLogo } from './styles';

export interface LogoProps {
  img: string;
  alt: string;
}

export const Logo = ({ img, alt }: LogoProps) => {
  return <StyledLogo src={img} alt={alt} className='h-6 w-auto' />;
};
