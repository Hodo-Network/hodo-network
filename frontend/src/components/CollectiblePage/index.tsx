import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { useWeb3React } from "@web3-react/core";
// import { ethers } from "ethers";
// import BN from "bn.js";
// import { WALLET_ADDRESS } from "../../constants";
import { collectibles } from "../../data";
import { NFT } from "../../typings/nft";
import { PureCollectiblePage } from "./CollectiblePage";

interface IParams {
  name: string;
  id: string;
}

const CollectiblePage = () => {
  // const { account } = useWeb3React();
  const { id, name } = useParams<IParams>();
  const [asset, setAsset] = useState<NFT>();
  const collection = collectibles.filter((item) => {
    return item.category === name;
  });

  const getAsset = (id: string) => {
    return collectibles.filter((asset) => {
      return asset.id === id;
    })[0];
  };

  // TODO: replace api call
  useEffect(() => {
    // fetch(`${endpoint}/${id}`).then(setAsset);
    setAsset(getAsset(id));
  }, [id]);

  const onBuyAsset = async () => {
    // TODO: switch to AVAX network first
    // const val = (asset && new BN(asset.price.value * 1e18)) || 0;
    // console.log("val", val);
    // try {
    //   const transactionParameters = {
    //     from: account,
    //     to: WALLET_ADDRESS,
    //     value: ethers.utils.hexValue(0),
    //     gasPrice: ethers.utils.hexValue(225 * 1e9),
    //     gas: ethers.utils.hexValue(21000),
    //   };
    //   await ethereum
    //     ?.request({
    //       method: "eth_sendTransaction",
    //       params: [transactionParameters],
    //     })
    //     .then((txHash) => console.log(txHash))
    //     .catch((error) => console.error);
    // } catch (error) {
    //   console.log(error);
    // }

    alert("Buy asset");
  };

  return (
    <PureCollectiblePage
      asset={asset}
      collection={collection}
      onBuyAsset={onBuyAsset}
    />
  );
};

export default CollectiblePage;
