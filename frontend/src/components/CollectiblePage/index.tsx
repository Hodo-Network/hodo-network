import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { useWeb3React } from "@web3-react/core";
// import { ethers } from "ethers";
// import BN from "bn.js";
// import { WALLET_ADDRESS } from "../../constants";
import { collectibles } from "../../data";
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
  const [asset, setAsset] = useState<NFT>();
  const collection = collectibles.filter((item) => {
    return item.category === name;
  });

  const getAsset = (tokenId: string) => {
    return collectibles.filter((asset) => {
      return asset.id === tokenId;
    })[0];
  };
  console.log("id", tokenId)

  // useEffect(() => {
  //   const getItems = async () => {
  //     // setItems(collections);

  //     let fetchNftData: any = await fetch(
  //       `http://localhost:8080/list_nfts`
  //     );
  //     fetchNftData = await fetchNftData.json();
  //     // fetchNftData = fetchNftData.reverse();
  //     // setFetchedItem(fetchNftData.data);
  //     // console.log("dsadas", fetchNftData);
  //     setItems(fetchNftData.data);
  //     console.log("fetchNftData.data",fetchNftData.data)
  //   };

  //   getItems().then(() => {
  //     setLoading(false);
  //   });
  // }, [chainId]);

  // TODO: replace with API data
  useEffect(() => {
    // fetch(`${endpoint}/${id}`).then(setAsset);
    setAsset(getAsset(tokenId));
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
      console.log("this is for contract", contract)
      const accounts = await web3.eth.getAccounts();
      setAccounts(accounts)
    }
    catch (error) {

    }
  }
  console.log("web3", web3State)


  // TODO: implement buy button
  const onBuyAsset = async () => {
    // TODO: switch to AVAX network first
    const receipt = await contract.methods
    .safeTransferFrom("0xdaF60d937a200b36688e4BfBA68Ef026231570Ef", accounts[0],15,"1000000000000000000",0x00)
    .send({ from: accounts[0] });
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
  };

  return (
    <PureCollectiblePage
      asset={asset}
      collection={collection}
      onBuyAsset={onBuyAsset}
      enableWeb3={enableWeb3}
    />
  );
};

export default CollectiblePage;
