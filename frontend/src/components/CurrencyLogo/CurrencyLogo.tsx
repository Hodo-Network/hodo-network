import { Avax, EthBlackWhite } from '../../assets';
import { NATIVE_CURRENCY } from '../../constants';

export interface ICurrencyLogoProps {
  network?: number;
}

export const CurrencyLogo = ({ network = 0 }: ICurrencyLogoProps) => {
  const currency = NATIVE_CURRENCY[network] || NATIVE_CURRENCY[0];

  const logos: { [key: string]: string } = {
    AVAX: Avax,
    ETH: EthBlackWhite,
  };

  return (
    <img
      src={logos[currency]}
      alt={`${currency} logo`}
      className='h-4 w-auto rounded-full'
    />
  );
};
