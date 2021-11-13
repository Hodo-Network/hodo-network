import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import axios from "axios";
import convertIpfsUrl from "../../utils/convertIpfsUrl";
import ContractAddresses from "../../contracts/contract-address.json";
import Continents from "../../contracts/Continents.json";
import Marketplace from "../../contracts/Marketplace.json";
import { PureUserNftList } from "./UserNftList";

const UserNftList = () => {
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
    const data = await marketContract.fetchMyNFTs();

    const items = await Promise.all(
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
          image: convertIpfsUrl(meta.data.image),
        };
        return formattedItem;
      })
    );
    setItems(items);
    setLoading(false);
  };

  return <PureUserNftList loading={loading} items={items} />;
};

export default UserNftList;
