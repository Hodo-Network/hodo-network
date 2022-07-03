import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { NATIVE_CURRENCY } from "../../constants";
import { NFT } from "../../typings/nft";
import CardEmpty from "../CardEmpty";

export interface IPureUserNftListProps {
  items?: Array<NFT>;
}

export const PureUserNftList = ({
  items,
}: IPureUserNftListProps) => {
  const { chainId } = useWeb3React<Web3Provider>();

  return (
    <div className='grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {!items || items.length === 0 ? (
        <CardEmpty />
      ) : items.map((item, idx) => (
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
