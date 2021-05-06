import React from "react";
import Avalanche from "avalanche";

let avalanche = new Avalanche("127.0.0.1", 9650, "https");
// const xchain = avalanche.XChain();
// const cchain = avalanche.CChain();
// const cKeychain = cchain.keyChain();
// const cAddressStrings = cchain.keyChain().getAddressStrings();
// const cChainBlockchainID: string = Defaults.network["12345"].C.blockchainID;

export default function ChainInfo() {
  const params = {
    address: "0x6cBEd289596f757fC406eE3AB4aC9E83cFb48B92",
    blk: "latest",
    assetID: "3RvKBAmQnfYionFXMfW5P8TDZgZiogKbHjM8cjpu16LKAgF5T",
  };
  const getBalances = async () => {
    try {
      await window.ethereum
        .request({
          method: "eth_getAssetBalance",
          params: [params],
        })
        .then((response) => console.log(response))
        .catch((error) => console.error);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button className='btn btn--large' onClick={getBalances}>
      Get Balances
    </button>
  );
}
