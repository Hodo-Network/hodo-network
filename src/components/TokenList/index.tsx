import React from "react";
import { TOKENS_BY_NETWORK } from "../../constants";
import { TokenBalance } from "../index";

export default function TokenList({ chainId }: { chainId: number }) {
  return (
    <>
      {TOKENS_BY_NETWORK[chainId].map((token) => (
        <TokenBalance key={token.address} {...token} />
      ))}
    </>
  );
}
