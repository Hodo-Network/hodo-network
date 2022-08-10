import { IERC20 } from '../../constants';
import TokenBalance from '../TokenBalance';

export interface IPureTokenListProps {
  tokens?: IERC20[];
}

export const PureTokenList = ({ tokens }: IPureTokenListProps) => {
  return (
    <>
      {!tokens || tokens.length === 0 ? (
        <div>No tokens</div>
      ) : (
        tokens.map((token) => <TokenBalance key={token.address} {...token} />)
      )}
    </>
  );
};
