import Button from "../../base/Button";
// import Avalanche from "avalanche";

// let avalanche = new Avalanche("127.0.0.1", 9650, "https");
// const xchain = avalanche.XChain();
// const cchain = avalanche.CChain();
// const cKeychain = cchain.keyChain();
// const cAddressStrings = cchain.keyChain().getAddressStrings();
// const cChainBlockchainID: string = Defaults.network["12345"].C.blockchainID;

export interface ChainInfoProps {
  params: any;
}

export const ChainInfo = ({ params }: ChainInfoProps) => {
  const getBalances = async () => {
    console.log("chaininfo");
    try {
      // @ts-ignore
      await ethereum
        .request({
          method: "eth_getAssetBalance",
          params: [params],
        })
        .then((response: any) => console.log(response));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button color="primary" size='lg' onClick={getBalances}>
      Get Balances
    </Button>
  );
};
