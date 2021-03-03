import React, { FC } from "react";

import { Props } from "./types";
import { StyledLogo } from "./styles";

const Logo: FC<Props> = ({ img, alt }) => (
  <StyledLogo src={img} alt={alt} className='h-8 w-auto' />
);

export default Logo;
