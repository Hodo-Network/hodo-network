import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Collection } from "../../typings/nft";
import { collections } from "../../data";
import { PureCollectionsPage } from "./CollectionsPage";

const CollectionsPage = () => {
  const { chainId } = useWeb3React();
  const [items, setItems] = useState<Collection[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchedItem, setFetchedItem] = useState<any>([]);

  // TODO: replace with API data
  useEffect(() => {
    const getItems = async () => {
      if (chainId === 43113 || chainId === 31337) {
        setItems(collections);
      }
    };

    getItems().then(() => {
      setLoading(false);
    });
  }, [chainId]);
  const newItem: any = [
    {
      "id": 7355,
      "name": "sas",
      "description": "dsad",
      "price": "5000000000000000",
      "network": "1",
      "image_uri": "https://infura-ipfs.io/ipfs/QmbeS7LRi2bLns5aoJkGQH1wSCSHtKXchAPLhdK2PJT7sV",
      "status": "1",
      "created_at": "2021-09-07T19:00:00.000Z",
      "external_link": "dsadas",
      "owner_address": "0x4d47752027850a286b211fe6ac53cc673544a58a",
      "slug": "ugly-ancient-scientist",
      "token_address": null,
      "creator_name": "dsadas",
      "resell": null,
      "tx_hash": "0x5ca9300a1fcda3750311538733e94582294808958bc12fe8a4313677375986fa",
      "supply": "3",
      "user_email": "sadsad",
      "is_deleted": 0,
      "is_minted": null,
      "sold": 0,
      "token_id": "95",
      "category": "Animals"
    },
    {
      "id": 7358,
      "name": "dsad",
      "description": "csadsad",
      "price": "8999999999999999",
      "network": "1",
      "image_uri": "https://infura-ipfs.io/ipfs/QmUJPu3FHXoXq1AeWg7aFFr4unFv7UMhYzN8kuksYWTsuz",
      "status": "1",
      "created_at": "2021-09-07T19:00:00.000Z",
      "external_link": "xsadsa",
      "owner_address": "0x4d47752027850a286b211fe6ac53cc673544a58a",
      "slug": "melted-lazy-dentist",
      "token_address": null,
      "creator_name": "dsadsa",
      "resell": null,
      "tx_hash": "0x5052ed61052a7524e903b8cbb5077f16d90e8f9299b2979739b389aa5c9ce860",
      "supply": "5",
      "user_email": "csadsa",
      "is_deleted": 0,
      "is_minted": null,
      "sold": 0,
      "token_id": "100",
      "category": "Creative"
    },
    {
      "id": 7363,
      "name": "dsads",
      "description": "dsadsa",
      "price": "50000000000000000",
      "network": "1",
      "image_uri": "https://infura-ipfs.io/ipfs/QmbKHmtREyVEjC5y7F9v2aa7G3FRakwtCrsrDxgaCjGcys",
      "status": "1",
      "created_at": "2021-09-07T19:00:00.000Z",
      "external_link": "dsadas",
      "owner_address": "0x4d47752027850a286b211fe6ac53cc673544a58a",
      "slug": "abundant-tight-brother",
      "token_address": null,
      "creator_name": "qqq",
      "resell": null,
      "tx_hash": "0x1da37ebd3d0b25357d9a3e57bd07026f8a27ff772a343450711a1dbd2c2d6a6b",
      "supply": "7",
      "user_email": "dsadsa",
      "is_deleted": 0,
      "is_minted": null,
      "sold": 0,
      "token_id": "92",
      "category": "Animals"
    },

  ]

  useEffect(() => {
    // Using an IIFE
    (async function anyNameFunction() {
     let fetchNftData:any = await fetch(`https://testapi.banana-coin.org/list_nfts`)
         fetchNftData = await fetchNftData.json();
         fetchNftData = fetchNftData ;
     //  fetchNftData = fetchNftData.reverse()
     setFetchedItem(fetchNftData.data)
      console.log("dsadas",fetchNftData)
    
    })(); 
   },[])
  return <PureCollectionsPage items={fetchedItem} loading={loading} />;
};

export default CollectionsPage;
