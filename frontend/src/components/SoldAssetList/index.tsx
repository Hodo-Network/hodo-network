import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import axios from "axios";
import convertIpfsUrl from "../../utils/convertIpfsUrl";
import ContractAddresses from "../../contracts/contract-address.json";
import Continents from "../../contracts/Continents.json";
import Marketplace from "../../contracts/Marketplace.json";
import { PureSoldAssetList } from "./SoldAssetList";

const SoldAssetList = () => {
  const { library } = useWeb3React<Web3Provider>();
  const [items, setItems] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    loadNFTs();
  }, []);

  const loadNFTs = async () => {
    const signer = library?.getSigner();

    const marketContract = new ethers.Contract(
      ContractAddresses.Marketplace,
      Marketplace.abi,
      signer
    );
    const tokenContract = new ethers.Contract(
      ContractAddresses.Continents,
      Continents.abi,
      library
    );
    const data = await marketContract.fetchItemsCreated();

    const tempItems = await Promise.all(
      data.map(async (item: any) => {
        const tokenUri = tokenContract.uri
          ? await tokenContract.uri(item.tokenId)
          : await tokenContract.tokenURI(item.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(item.price.toString(), "ether");
        let formattedItem = {
          price,
          tokenId: item.tokenId.toNumber(),
          seller: item.seller,
          owner: item.owner,
          sold: item.sold,
          image: convertIpfsUrl(meta.data.image),
        };
        return formattedItem;
      })
    );
    /* create a filtered array of tempItems that have been sold */
    const soldItems = tempItems.filter((item: any) => item.sold);
    setItems(soldItems);
    setLoading(false);
  };

  return <PureSoldAssetList loading={loading} items={items} />;
};

export default SoldAssetList;
