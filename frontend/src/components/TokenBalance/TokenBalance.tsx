export interface IPureTokenBalanceProps {
  balance?: number | string;
  symbol?: string;
}

export const PureTokenBalance = ({
  balance = 0,
  symbol = "AVAX",
}: IPureTokenBalanceProps) => {
  return (
    <div>
      {balance} {symbol}
    </div>
  );
};
