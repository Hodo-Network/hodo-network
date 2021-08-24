import { useHistory } from "react-router-dom";
import { ROUTE_COLLECTIONS } from "../../constants/routes";
import { PureHero } from "./Hero";

const Hero = () => {
  const history = useHistory();
  const onClick = () => {
    history.push(ROUTE_COLLECTIONS);
  };

  return <PureHero onClick={onClick} />;
};

export default Hero;
