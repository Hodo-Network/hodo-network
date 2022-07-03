import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import Web3 from "web3";
// import { AbiItem } from "web3-utils";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import { Contract } from "@ethersproject/contracts";
// import BN from "bn.js";
// import { WALLET_ADDRESS } from "../../constants";
import { buyNftEndpoint, saveNftEndpoint, updateIsDeleteNftEndpoint } from "../../http";
// import { getCollections } from "../../state/asyncActions/collections";
// import { getCollection } from "../../state/asyncActions/collection";
import { Collection, NFT } from "../../typings/nft";
// import NFTABI from "../../abi/NFTABI.json";
// import Continents from "../../contracts/Continents.json";
import ContractAddresses from "../../contracts/contract-address.json";
import Marketplace from "../../contracts/Marketplace.json";
import { PureListingModule } from "./ListingModule";

// require("dotenv").config();
// const API_URL = process.env.API_URL;
// const PUBLIC_KEY = process.env.PUBLIC_KEY;
// const PRIVATE_KEY = process.env.PRIVATE_KEY;

// const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// const web3 = createAlchemyWeb3(API_URL);

// const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
// const nftContract = new web3.eth.Contract(contract.abi, ContractAddresses.Continents);

export interface ListingModuleProps {
  item: NFT;
  collection: Collection;
}

const ListingModule = ({ item, collection }: ListingModuleProps) => {
  const { account, library, chainId } = useWeb3React<Web3Provider>();
  // const [marketContract, setMarketContract] = useState<any>();
  // const [web3State, setWeb3State] = useState<any>();
  // const [accounts, setAccounts] = useState<any>();

  useEffect(() => {
    getListing();
  }, []);

  const getListing = async () => {
    console.log("getListing");
    // const provider = new ethers.providers.JsonRpcProvider();
    // const tokenContract = new Contract(
    //   ContractAddresses.Marketplace,
    //   Marketplace.abi,
    //   provider
    // );
    // const mitems = await tokenContract.fetchMarketItems();
    // const itemListing = mitems.find(
    //   (item: any) =>
    //     item.tokenId === tokenId && item.nftContract === contractAddress
    // );

    // setListing(itemListing);

    // uint indexed itemId,
    // address indexed nftContract,
    // uint256 indexed tokenId,
    // address seller,
    // address owner,
    // uint256 price,
    // bool sold
  };

  const onBuyAsset = async () => {
    try {
      console.log("onBuyAsset");
      const requestOptions = {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify({
          id: item.id,
          buyerAddress: account,
        }),
      };

      let fetchNftData = await fetch(buyNftEndpoint, requestOptions);

      // if (fetchNftData.status === 200) {
      //   let price = item.data ? item.data.price.toString() : "";
      //   let token_id = item.data ? item.data.tokenId.toString() : "";
      //   token_id = --token_id;
      //   let tradeCount = await contract.methods.getTradeCount().call();
      //   tradeCount = --tradeCount;
      //   const receipt = await contract.methods
      //     .executeTrade(tradeCount, 0x00)
      //     .send({ from: account, value: price });
      //   console.log("after  transaction ", receipt);

      //   // const val = (item && new BN(item.price * 1e18)) || 0;
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
      console.log("onBuyAsset error:", error);
    }
  };

  // From tutorial
  // eslint-disable-next-line
  const onBuyAssetTut = async (nft: NFT) => {
    const signer = library?.getSigner();
    const contract = new Contract(
      ContractAddresses.Marketplace,
      Marketplace.abi,
      signer
    );

    const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
    const transaction = await contract.createMarketSale(
      nft.contractAddress,
      nft.tokenId,
      {
        value: price,
      }
    );
    await transaction.wait();
    // loadNfts();
  };

  const onSellAsset = async () => {
    try {
      console.log("onSellAsset");
      const price = 2;
      const tx_hash = '0x00';

      const requestOptions = {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify({
          name: item.name,
          description: item.description,
          price,
          image: item.image,
          owner_address: item.owner_address,
          creator: item.creator,
          supply: item.supply,
          tokenId: item.tokenId,
          tx_hash,
          lat: item.lat,
          lng: item.lng,
          // rarity: item.rarity,
          contractAddress: item.contractAddress,
          amount: item.amount,
        }),
      };

      let fetchNftData = await fetch(saveNftEndpoint, requestOptions);

      if (library) {
        const provider = new ethers.providers.JsonRpcProvider();
        // const tokenContract = new Contract(
        //   ContractAddresses.Continents,
        //   Continents.abi,
        //   provider
        // );

        // const signer = library?.getSigner();
        const market = new Contract(
          ContractAddresses.Marketplace,
          Marketplace.abi,
          provider.getSigner()
        );
        // setMarketContract(market);

        let listingPrice = await market.getListingPrice();
        listingPrice = listingPrice.toString();

        // TODO: prompt user for Price and sale info
        const price = 2;
        const val = ethers.utils.parseUnits(price.toString(), "ether");
        // const val = new BN(price * 1e18) || 0;

        // TODO: error - token doesn't exist until mint
        const llitem = await market.createMarketItem(
          collection.contractAddress,
          item.tokenId,
          val,
          { value: listingPrice }
        );

        // const price2 = await tokenContract.getListingPrice();
        // const myitems = await tokenContract.fetchMyNFTs();
        // const mitems = await tokenContract.fetchMarketItems();
        // const citems = await tokenContract.fetchItemsCreated();
      }
    } catch (error) {
      console.log("onSellAsset error:", error);
    }
  };

  const onRemoveListing = async () => {
    try {
      console.log("onRemoveListing");
      const requestOptions = {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify({
          id: item.id,
          is_deleted: 1,
        }),
      };

      let fetchNftData = await fetch(updateIsDeleteNftEndpoint, requestOptions);

    } catch (error) {
      console.log('onRemoveListing error:', error);
    }
  };

  const onChangePrice = () => {
    console.log("onChangePrice");
  };

  const onMintNft = async (tokenURI: string) => {
    console.log("onMintNft");
    // const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest"); //get latest nonce

    // //the transaction
    // const tx = {
    //   from: PUBLIC_KEY,
    //   to: ContractAddresses.Continents,
    //   nonce: nonce,
    //   gas: 500000,
    //   maxPriorityFeePerGas: 1999999987,
    //   data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),
    // };

    // const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
    // signPromise
    //   .then((signedTx: any) => {
    //     web3.eth.sendSignedTransaction(
    //       signedTx.rawTransaction,
    //       function (err: any, hash: any) {
    //         if (!err) {
    //           console.log(
    //             "The hash of your transaction is: ",
    //             hash,
    //             "\nCheck Alchemy's Mempool to view the status of your transaction!"
    //           );
    //         } else {
    //           console.log(
    //             "Something went wrong when submitting your transaction:",
    //             err
    //           );
    //         }
    //       }
    //     );
    //   })
    //   .catch((err: any) => {
    //     console.log("Promise failed:", err);
    //   });
  };

  return (
    <PureListingModule
      price={item.price}
      owned={item.owner_address === account}
      forSale={!item.sold && !item.is_deleted}
      connected={!!account && chainId === collection.network}
      onSellAsset={onSellAsset}
      onBuyAsset={onBuyAsset}
      onRemoveListing={onRemoveListing}
      onChangePrice={onChangePrice}
    />
  );
};

export default ListingModule;
