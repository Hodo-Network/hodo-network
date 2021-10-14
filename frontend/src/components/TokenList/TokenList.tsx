import React from "react";
import { TOKENS_BY_NETWORK } from "../../constants";
import TokenBalance from "../TokenBalance";

export interface TokenListProps {
  chainId: number;
}

export const TokenList: React.FC<TokenListProps> = ({ chainId }) => {
  return (
    <>
      {TOKENS_BY_NETWORK[chainId]?.map((token) => (
        <TokenBalance key={token.address} {...token} />
      ))}
    </>
  );
};
