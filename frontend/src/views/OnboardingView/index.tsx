import { useWeb3React } from "@web3-react/core";
import { PureOnboardingView } from "./OnboardingView";

const OnboardingView = () => {
  const { active, account } = useWeb3React();

  return <PureOnboardingView connected={active} address={account} />;
};

export default OnboardingView;
