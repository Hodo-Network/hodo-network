import { TOKENS_BY_NETWORK } from '../../constants';
import { PureTokenList } from './TokenList';

export interface ITokenListProps {
  chainId: number;
}

const TokenList = ({ chainId }: ITokenListProps) => {
  const tokens = TOKENS_BY_NETWORK[chainId];

  return <PureTokenList tokens={tokens} />;
};

export default TokenList;
