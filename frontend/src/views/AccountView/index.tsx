import { useEffect, useMemo, useState } from 'react';
// import { useMemo } from "react";
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import axios from 'axios';
import { ethers } from 'ethers';
// import { SWRConfig } from "swr";
// import fetcher from "swr-eth";
import {
  // TOKENS_BY_NETWORK,
  NETWORK_LABELS,
} from '../../constants';
import Continents from '../../contracts/Continents.json';
import ContractAddresses from '../../contracts/contract-address.json';
import Marketplace from '../../contracts/Marketplace.json';
import { NFT } from '../../typings/nft';
import convertIpfsUrl from '../../utils/convertIpfsUrl';
import { PureAccountView } from './AccountView';

// This is an error code that indicates that the user canceled a transaction
// const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

const AccountView = () => {
  const { chainId, account, library } = useWeb3React<Web3Provider>();
  const [items, setItems] = useState<NFT[]>([]);
  const soldItems = useMemo(
    (): NFT[] => items.filter((item) => item.sold),
    [items]
  );

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
    // TODO: decide which to use
    // const data = await marketContract.fetchItemsCreated();

    const tempItems = await Promise.all(
      data.map(async (item: any) => {
        const tokenUri = tokenContract.uri
          ? await tokenContract.uri(item.tokenId)
          : await tokenContract.tokenURI(item.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(item.price.toString(), 'ether');
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

    setItems(tempItems);
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
    <PureAccountView
      network={(chainId && NETWORK_LABELS[chainId]) || ''}
      address={account || ''}
      chainId={chainId}
      connected={!!chainId}
      owned={items}
      sold={soldItems}
    />
  );
};

export default AccountView;
