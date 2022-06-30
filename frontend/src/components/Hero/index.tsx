import { useNavigate } from "react-router-dom";
import { ROUTE_MARKETPLACE } from "../../constants/routes";
import { PureHero } from "./Hero";

const Hero = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(ROUTE_MARKETPLACE);
  };

  return <PureHero onClick={onClick} />;
};

export default Hero;
