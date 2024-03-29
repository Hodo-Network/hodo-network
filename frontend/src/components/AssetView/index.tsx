import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import Web3 from "web3";
// import { AbiItem } from "web3-utils";
import { useWeb3React } from "@web3-react/core";
import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from "@ethersproject/providers";
import { ethers } from "ethers";
// import BN from "bn.js";
// import { buyNftEndpoint } from "../../http";
// eslint-disable-next-line
import { Collection, NFT } from "../../typings/nft";
// import { WALLET_ADDRESS } from "../../constants";
// import NFTABI from "../../abi/NFTABI.json";
// import Continents from "../../contracts/Continents.json";
import ContractAddresses from "../../contracts/contract-address.json";
import Marketplace from "../../contracts/Marketplace.json";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
// import { getCollections } from "../../state/asyncActions/collections";
// import { getCollection } from "../../state/asyncActions/collection";
import { getAsset } from "../../state/asyncActions/asset";
import { PureAssetView } from "./AssetView";

export interface AssetViewProps {
  contractAddress: string;
  tokenId: string;
}

const AssetView = ({ contractAddress, tokenId }: AssetViewProps) => {
  const { account, library } = useWeb3React<Web3Provider>();
  const dispatch = useAppDispatch();
  const collections = useAppSelector((state) => state.collections.data);
  const asset = useAppSelector((state) => state.asset.data);
  const loading = useAppSelector((state) => state.asset.loading);
  const [marketContract, setMarketContract] = useState<any>();
  const [item, setItem] = useState<NFT>();
  const [collection, setCollection] = useState<any>();
  // const [web3State, setWeb3State] = useState<any>();
  // const [accounts, setAccounts] = useState<any>();

  useEffect(() => {
    dispatch(getAsset(tokenId));
  }, [tokenId]);

  useEffect(() => {
    if (asset?.status) {
      setItem(asset?.data);
    }
  }, [asset]);

  useEffect(() => {
    const data = collections?.data.find(
      (item: any) => item.contractAddress === contractAddress
    );
    setCollection(data);
  }, []);

  const onCreateListing = async () => {
    console.log("create listing");

    try {
      if (library) {
        const provider = new ethers.providers.JsonRpcProvider();
        const tokenContract = new Contract(
          ContractAddresses.Marketplace,
          Marketplace.abi,
          provider
        );

        let listingPrice = await tokenContract.getListingPrice();
        listingPrice = listingPrice.toString();

        // const signer = library?.getSigner();
        const market = new Contract(
          ContractAddresses.Marketplace,
          Marketplace.abi,
          provider.getSigner()
        );
        setMarketContract(market);

        // TODO: remove
        await tokenContract.mint(1);
        debugger;

        const price = 2;
        const val = ethers.utils.parseUnits(price.toString(), "ether");
        // const val = new BN(price * 1e18) || 0;

        const llitem = await market.createMarketItem(
          ContractAddresses.Continents,
          tokenId,
          val,
          { value: listingPrice }
        );

        // const price2 = await tokenContract.getListingPrice();
        // const myitems = await tokenContract.fetchMyNFTs();
        // const mitems = await tokenContract.fetchMarketItems();
        // const citems = await tokenContract.fetchItemsCreated();
      }
    } catch (error) {
      console.log("AssetView load error: ", error);
    }
  };

  // require("dotenv").config();
  // const API_URL = process.env.API_URL;
  // const PUBLIC_KEY = process.env.PUBLIC_KEY;
  // const PRIVATE_KEY = process.env.PRIVATE_KEY;

  // const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
  // const web3 = createAlchemyWeb3(API_URL);

  // const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
  // const nftContract = new web3.eth.Contract(contract.abi, ContractAddresses.Continents);

  // async function mintNFT(tokenURI) {
  //   const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest"); //get latest nonce

  //   //the transaction
  //   const tx = {
  //     from: PUBLIC_KEY,
  //     to: ContractAddresses.Continents,
  //     nonce: nonce,
  //     gas: 500000,
  //     maxPriorityFeePerGas: 1999999987,
  //     data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),
  //   };

  //   const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
  //   signPromise
  //     .then((signedTx: any) => {
  //       web3.eth.sendSignedTransaction(
  //         signedTx.rawTransaction,
  //         function (err: any, hash: any) {
  //           if (!err) {
  //             console.log(
  //               "The hash of your transaction is: ",
  //               hash,
  //               "\nCheck Alchemy's Mempool to view the status of your transaction!"
  //             );
  //           } else {
  //             console.log(
  //               "Something went wrong when submitting your transaction:",
  //               err
  //             );
  //           }
  //         }
  //       );
  //     })
  //     .catch((err: any) => {
  //       console.log("Promise failed:", err);
  //     });
  // }

  const getListing = async () => {
    const provider = new ethers.providers.JsonRpcProvider();
    const tokenContract = new Contract(
      ContractAddresses.Marketplace,
      Marketplace.abi,
      provider
    );
    const mitems = await tokenContract.fetchMarketItems();
    const itemListing = mitems.find(
      (item: any) =>
        item.tokenId === tokenId && item.nftContract === contractAddress
    );

    // setListing(itemListing);

    // uint indexed itemId,
    // address indexed nftContract,
    // uint256 indexed tokenId,
    // address seller,
    // address owner,
    // uint256 price,
    // bool sold
  };

  useEffect(() => {
    getListing();
  }, []);

  const onBuyAsset = async () => {
    try {
      console.log("buy");
      let ownerAddress = account;
      let id = asset.data ? asset.data.id : "";
      // const requestOptions = {
      //   method: "POST",
      //   headers: { "Content-type": "application/json;charset=UTF-8" },
      //   body: JSON.stringify({
      //     id,
      //     ownerAddress,
      //   }),
      // };

      // let fetchNftData = await fetch(buyNftEndpoint, requestOptions);
      // console.log(fetchNftData);

      // if (fetchNftData.status === 200) {
      //   let price = asset.data ? asset.data.price.toString() : "";
      //   let token_id = asset.data ? asset.data.tokenId.toString() : "";
      //   token_id = --token_id;
      //   let tradeCount = await contract.methods.getTradeCount().call();
      //   tradeCount = --tradeCount;
      //   const receipt = await contract.methods
      //     .executeTrade(tradeCount, 0x00)
      //     .send({ from: account, value: price });
      //   console.log("after  transaction ", receipt);

      //   // const val = (asset && new BN(asset.price * 1e18)) || 0;
      //   try {
      //     const transactionParameters = {
      //       from: account,
      //       to: WALLET_ADDRESS,
      //       value: ethers.utils.hexValue(0),
      //       gasPrice: ethers.utils.hexValue(225 * 1e9),
      //       gas: ethers.utils.hexValue(21000),
      //     };
      //     // @ts-ignore
      //     await ethereum
      //       ?.request({
      //         method: "eth_sendTransaction",
      //         params: [transactionParameters],
      //       })
      //       .then((txHash: any) => console.log(txHash))
      //       .catch((error: any) => console.error);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // }
    } catch (error) {
      console.log("Error with onBuyAsset", error);
    }
  };

  // From tutorial
  // eslint-disable-next-line
  const onBuyAssetTut = async (nft: any) => {
    const signer = library?.getSigner();
    const contract = new Contract(
      ContractAddresses.Marketplace,
      Marketplace.abi,
      signer
    );

    const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
    const transaction = await contract.createMarketSale(
      nft.address,
      nft.tokenId,
      {
        value: price,
      }
    );
    await transaction.wait();
    // loadNfts();
  };

  return (
    <PureAssetView
      item={item}
      collection={collection}
      onBuyAsset={onBuyAsset}
      onCreateListing={onCreateListing}
      connected={!!account}
      loading={loading}
      account={account}
    />
  );
};

export default AssetView;
