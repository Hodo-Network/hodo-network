import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { Contract, ethers } from 'ethers';
import { useState } from 'react';
import { useNavigate } from 'react-router';
// import axios from "axios";
import { create as ipfsHttpClient } from 'ipfs-http-client';
// import { ROUTE_ACCOUNT } from "../../constants/routes";
import Continents from '../../contracts/Continents.json';
import ContractAddresses from '../../contracts/contract-address.json';
import Marketplace from '../../contracts/Marketplace.json';
// import { PureCreateItemForm } from "./CreateItemForm";

// interface IParams {
//   contractAddress: string;
// }

const client = ipfsHttpClient({
  apiPath: 'https://ipfs.infura.io:5001/api/v0',
});

const SellItemForm = () => {
  const navigate = useNavigate();
  const { library } = useWeb3React<Web3Provider>();
  const [loading, setLoading] = useState<boolean>(false);
  const [formInput, updateFormInput] = useState({
    price: '',
  });

  const onSubmitForm = (event: any) => {
    event.preventDefault();
    onCreateListing('');
  };

  const onCreateListing = async (url: string) => {
    try {
      const signer = library?.getSigner();

      // TODO: make this dynamic to support other ABIs without saving a json file
      let contract = new Contract(
        ContractAddresses.Continents,
        // contractAddress,
        Continents.abi,
        signer
      );
      let transaction = await contract.createToken(url);
      let tx = await transaction.wait();

      let event = tx.events[0];
      let value = event.args[2];
      let tokenId = value.toNumber();

      const price = ethers.utils.parseUnits(formInput.price, 'ether');
      contract = new Contract(
        ContractAddresses.Marketplace,
        Marketplace.abi,
        signer
      );

      // listing fee
      let listingPrice = await contract.getListingPrice();
      listingPrice = listingPrice.toString();

      transaction = await contract.createMarketItem(
        ContractAddresses.Continents,
        // contractAddress,
        tokenId,
        price,
        { value: listingPrice }
      );
      await transaction.wait();

      // navigate(ROUTE_ACCOUNT);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // return <PureCreateItemForm loading={loading} onCreateItem={onCreateItem} />;

  return (
    <form onSubmit={(e) => onSubmitForm(e)}>
      <div className='shadow sm:rounded-md sm:overflow-hidden'>
        <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
          <div>
            <label
              htmlFor='price'
              className='block text-sm font-medium text-gray-700'>
              Price
            </label>
            <input
              type='text'
              name='price'
              id='price'
              className='mt-1 focus:ring-primary-focus focus:border-primary-focus block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
              onChange={(e) =>
                updateFormInput({ ...formInput, price: e.target.value })
              }
            />
          </div>
        </div>
        <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
          <button
            type='submit'
            className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-focus'>
            Complete listing
          </button>
        </div>
      </div>
    </form>
  );
};

export default SellItemForm;
