import { useHistory } from "react-router-dom";
import { ROUTE_MARKETPLACE } from "../../constants/routes";
import { PureHero } from "./Hero";

const Hero = () => {
  const history = useHistory();
  const onClick = () => {
    history.push(ROUTE_MARKETPLACE);
  };

  return <PureHero onClick={onClick} />;
};

export default Hero;
