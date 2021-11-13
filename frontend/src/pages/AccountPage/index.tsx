import { useEffect, useState } from "react";
// import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { ethers } from "ethers";
import axios from "axios";
// import { SWRConfig } from "swr";
// import fetcher from "swr-eth";
import convertIpfsUrl from "../../utils/convertIpfsUrl";
import ContractAddresses from "../../contracts/contract-address.json";
import Continents from "../../contracts/Continents.json";
import Marketplace from "../../contracts/Marketplace.json";
import {
  // TOKENS_BY_NETWORK,
  NETWORK_LABELS,
} from "../../constants";
import { PureAccountPage } from "./AccountPage";

// This is an error code that indicates that the user canceled a transaction
// const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

const AccountPage = () => {
  const { chainId, account, library } = useWeb3React<Web3Provider>();
  const [items, setItems] = useState<Array<any>>([]);
  const [sold, setSold] = useState<Array<any>>([]);
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
          sold: item.sold,
          image: convertIpfsUrl(meta.data.image),
        };
        return formattedItem;
      })
    );
    /* create a filtered array of items that have been sold */
    const soldItems = items.filter((item: any) => item.sold);
    setSold(soldItems);
    setItems(items);
    setLoading(false);
  };

  // [
  //   [ 0x00001, JSONABI ]
  // ]
  // const ABIs: any[] = useMemo(() => {
  //   if (chainId) {
  //     return (
  //       TOKENS_BY_NETWORK[chainId] || []
  //     ).map(({ address, abi }: { address: string; abi: any }) => [
  //       address,
  //       abi,
  //     ]);
  //   } else {
  //     return [];
  //   }
  // }, [chainId]);

  return (
    <PureAccountPage
      network={(chainId && NETWORK_LABELS[chainId]) || ""}
      address={account}
      chainId={chainId}
      connected={!!chainId}
      loading={loading}
      owned={items}
      sold={sold}
    />
  );
};

export default AccountPage;
