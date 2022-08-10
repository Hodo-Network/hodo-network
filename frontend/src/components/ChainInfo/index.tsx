import { PureChainInfo } from './ChainInfo';
// import Avalanche from "avalanche";

// let avalanche = new Avalanche("127.0.0.1", 9650, "https");
// const xchain = avalanche.XChain();
// const cchain = avalanche.CChain();
// const cKeychain = cchain.keyChain();
// const cAddressStrings = cchain.keyChain().getAddressStrings();
// const cChainBlockchainID: string = Defaults.network["12345"].C.blockchainID;

// Example
// params: {
//   address: "0x6cBEd289596f757fC406eE3AB4aC9E83cFb48B92",
//   blk: "latest",
//   assetID: "3RvKBAmQnfYionFXMfW5P8TDZgZiogKbHjM8cjpu16LKAgF5T",
// },

export interface ChainInfoProps {
  params: any;
}

const ChainInfo = ({ params }: ChainInfoProps) => {
  const onGetBalances = async () => {
    console.log('chaininfo');
    try {
      // @ts-ignore
      await ethereum
        .request({
          method: 'eth_getAssetBalance',
          params: [params],
        })
        .then((response: any) => console.log(response));
    } catch (error) {
      console.log(error);
    }
  };

  return <PureChainInfo onClick={onGetBalances} />;
};

export default ChainInfo;
