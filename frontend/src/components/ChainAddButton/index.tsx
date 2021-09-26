// import { Web3Provider } from "@ethersproject/providers";
// import { useWeb3React } from "@web3-react/core";
import { PureChainAddButton } from "./ChainAddButton";

const ChainAddButton = ({
  label,
  disabled,
  params,
}: {
  label: string;
  disabled?: boolean;
  params: any;
}) => {
  // const { connector, library } = useWeb3React<Web3Provider>();
  const onClick = async () => {
    try {
      // @ts-ignore
      await ethereum.request({
        method: "wallet_addEthereumChain",
        params: [params],
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PureChainAddButton onClick={onClick} disabled={disabled} label={label} />
  );
};

export default ChainAddButton;
