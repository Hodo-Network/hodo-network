import ERC20ABI from "../abi/ERC20.abi.json";

export const NetworkContextName = "NETWORK";
export const GAS_PRICE = 225;
export const WALLET_ADDRESS = "0x6cBEd289596f757fC406eE3AB4aC9E83cFb48B92";
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export const supportedChainIds = [1, 3, 4, 5, 42, 43113, 43114];

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

export const NETWORK_LABELS = {
  [ChainId.ETHEREUM]: "Ethereum",
  [ChainId.FUJI]: "Avalanche Fuji Testnet",
  [ChainId.AVALANCHE]: "Avalanche Mainnet C-Chain",
};

export const NETWORK_LABELS_SHORT = {
  [ChainId.ETHEREUM]: "Ethereum",
  [ChainId.FUJI]: "Fuji",
  [ChainId.AVALANCHE]: "Avalanche",
};

export const NATIVE_CURRENCY = {
  0: "AVAX", // Default fallback
  [ChainId.ETHEREUM]: "ETH",
  [ChainId.FUJI]: "AVAX",
  [ChainId.AVALANCHE]: "AVAX",
};

export const Networks = {
  MainNet: 1,
  Ropsten: 3,
  Rinkeby: 4,
  Goerli: 5,
  Kovan: 42,
  Fuji: 43113,
  Avalanche: 43114,
};

export interface IERC20 {
  symbol: string;
  address: string;
  decimals: number;
  name: string;
  abi: any;
}

export const TOKENS_BY_NETWORK: {
  [key: number]: IERC20[];
} = {
  [Networks.Fuji]: [],
  [Networks.Avalanche]: [
    {
      address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
      symbol: "WAVAX",
      name: "WAVAX",
      decimals: 18,
      abi: ERC20ABI,
    },
  ],
};
