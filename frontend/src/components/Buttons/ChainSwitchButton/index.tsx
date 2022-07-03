import { useEffect } from 'react';
import { PureChainSwitchButton } from "./ChainSwitchButton";

// params: {
//   chainId: 4,
// }
export interface ChainSwitchButtonProps {
  params?: any;
}

const ChainSwitchButton = ({
  params,
}: ChainSwitchButtonProps) => {
  const disabled = false;

  useEffect(() => {
    // TODO: move higher up?
    // ethereum?.on("chainChanged", (_chainId) => window.location.reload());

    const requestChain = async () => {
      // try {
      //   await ethereum?.request({ method: "eth_chainId" });
      // } catch (error) {
      //   console.error(error);
      // }
    };

    requestChain();
  }, [params]);

  const onClick = async () => {
    // try {
    //   await ethereum?.request({
    //     method: "wallet_addEthereumChain",
    //     params: [params],
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return <PureChainSwitchButton onClick={onClick} disabled={disabled} />;
};

export default ChainSwitchButton;
