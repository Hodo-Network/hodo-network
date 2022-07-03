export interface IPureChainBalanceProps {
  balance?: number | string;
  symbol?: string;
}

export const PureChainBalance = ({
  balance = 0,
  symbol = "AVAX"
}: IPureChainBalanceProps) => {
  return (
    <div>
      {balance} {symbol}
    </div>
  );
};
