export interface IPureChainBalance {
  balance?: number | string;
  currency?: string;
}

export const PureChainBalance = ({ balance = 0, currency = "AVAX" }: IPureChainBalance) => {
  return (
    <div>
      {balance} {currency}
    </div>
  );
};
