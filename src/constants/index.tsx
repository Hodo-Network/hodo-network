export const NetworkContextName = "NETWORK";
export const GAS_PRICE = 225;
export const WALLET_ADDRESS = "0x6cBEd289596f757fC406eE3AB4aC9E83cFb48B92";
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export const supportedChainIds = [1, 43113, 43114];

export const ChainId = {
  ETHEREUM: 1,
  FUJI: 43113,
  AVALANCHE: 43114,
};

export const AVALANCHE_MAINNET_PARAMS = {
  chainId: "0xa86a",
  chainName: "Avalanche Mainnet C-Chain",
  nativeCurrency: {
    name: "Avalanche",
    symbol: "AVAX",
    decimals: 18,
  },
  rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
  blockExplorerUrls: ["https://cchain.explorer.avax.network/"],
};

export const AVALANCHE_TESTNET_PARAMS = {
  chainId: "0xa869",
  chainName: "Avalanche Testnet C-Chain",
  nativeCurrency: {
    name: "Avalanche",
    symbol: "AVAX",
    decimals: 18,
  },
  rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
  blockExplorerUrls: ["https://cchain.explorer.avax-test.network/"],
};
