import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { useWeb3React } from "@web3-react/core";
// import { ethers } from "ethers";
// import BN from "bn.js";
// import { WALLET_ADDRESS } from "../../constants";
// import { collectibles } from "../../data";
import { NFT } from "../../typings/nft";
import { PureCollectiblePage } from "./CollectiblePage";
import Web3 from "web3";
import { CONTRACT_ADDRESS } from '../../abi/NFT';
import { AbiItem } from 'web3-utils'

import ABI from '../../abi/NFTABI.json';
interface IParams {
  name: string;
  tokenId: string;
}


const CollectiblePage = () => {
  // const { account } = useWeb3React();
  const { tokenId, name } = useParams<IParams>();
  const [itemsss, setItems] = useState<Array<NFT>>([]);
  const [asset, setAsset] = useState<NFT>();
  const collection = itemsss.filter((item) => {
    return item.category === name;
  });

  const getAsset = (tokenId: string, arrayData: any) => {
    return arrayData.filter((asset: any) => {
      console.log("ss", asset)
      return asset.id == tokenId;
    })[0];
  };
  console.log("id", tokenId)

  useEffect(() => {
    const getItems = async () => {
      // setItems(collections);

      let fetchNftData: any = await fetch(
        `https://hodoapi.buildmydapp.co/list_nfts`
      );
      fetchNftData = await fetchNftData.json();
      setItems(fetchNftData.data);
      setAsset(getAsset(tokenId, fetchNftData.data));

    };

    getItems().then(() => {
    });
  }, []);

  // TODO: replace with API data
  useEffect(() => {
    // fetch(`${endpoint}/${id}`).then(setAsset);
    // setAsset(getAsset(tokenId));
  }, [tokenId]);

  const [web3State, setWeb3State] = useState<any>();
  const [accounts, setAccounts] = useState<any>();
  const [contract, setContract] = useState<any>();

  const enableWeb3 = async () => {
    try {
      const web3 = new Web3(Web3.givenProvider);
      await Web3.givenProvider.enable();
      setWeb3State(web3)
      const contract = new web3.eth.Contract(ABI as AbiItem[], CONTRACT_ADDRESS);
      setContract(contract)
      console.log("this is for contract", contract.methods)
      const accounts = await web3.eth.getAccounts();
      setAccounts(accounts)
    }
    catch (error) {

    }
  }
  console.log("web3", web3State)
  console.log("assetasset", asset)


  // TODO: implement buy button
  const onBuyAsset = async () => {
    try {
      let ownerAddress = accounts[0];
      let id = asset ? asset.id : "";
      const requestOptions = {
        method: 'POST',
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify({
          id, ownerAddress
        })
      };
      let fetchNftData = await fetch(`https://hodoapi.buildmydapp.co/buy_nft`, requestOptions)
      // TODO: switch to AVAX network first
      let token_id: any = asset ? (asset.tokenId).toString() : "";
      let price: any = asset ? (asset.price.value).toString() : "";
      console.log("token_id", token_id)
      // token_id = --token_id
      let tradeCount = await contract.methods.getTradeCount().call();
      tradeCount = --tradeCount
      const receipt = await contract.methods
        .executeTrade(tradeCount, 0x00)
        .send({ from: accounts[0], value: price });


      console.log("after  transaction ", receipt);


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
    }
    catch (error) {

    }
  };

  console.log("web3State", web3State)
  return (
    <PureCollectiblePage
      asset={asset}
      collection={itemsss}
      onBuyAsset={onBuyAsset}
      enableWeb3={enableWeb3}
      web3State={web3State}
    />
  );
};

export default CollectiblePage;
