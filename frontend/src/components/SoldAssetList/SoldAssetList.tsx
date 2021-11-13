import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import ReactLoading from "react-loading";
import { NATIVE_CURRENCY } from "../../constants";

export interface PureSoldAssetListProps {
  loading?: boolean;
  items: Array<any>;
}

export const PureSoldAssetList = ({
  loading = false,
  items,
}: PureSoldAssetListProps) => {
  const { chainId } = useWeb3React<Web3Provider>();

  if (loading) {
    return (
      <ReactLoading
        type='bubbles'
        color='currentColor'
        className='text-blue-600 dark:text-blue-500'
      />
    );
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
      {items.map((item, idx) => (
        <div key={idx} className='border shadow rounded-xl overflow-hidden'>
          <img src={item.image} className='rounded' alt='' />
          <div className='p-4 bg-black'>
            <p className='text-2xl font-bold text-white'>
              Price - {item.price}{" "}
              {(chainId && NATIVE_CURRENCY[chainId]) || NATIVE_CURRENCY[0]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
