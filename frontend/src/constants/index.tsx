import {
  CONTINENTS_AVALANCHE_ADDRESS,
  CONTINENTS_FUJI_ADDRESS,
  CONTINENTS_LOCALHOST_ADDRESS,
} from '../abi/Continents';
import ContinentsAbi from '../abi/Continents.abi.json';
import ERC20ABI from '../abi/ERC20.abi.json';

export const NetworkContextName = 'NETWORK';
export const GAS_PRICE = 225;
// TODO: replace with HODO wallet
export const WALLET_ADDRESS = '0xb935090108C3daCC47E489D2d958610E21B639D3';
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
export const IPFS_GATEWAY_PREFIX = 'https://gateway.pinata.cloud';

export const supportedChainIds = [1, 31337, 43112, 43113, 43114];

export const ChainId = {
  ETHEREUM: 1,
  LOCALHOST: 43112,
  FUJI: 43113,
  AVALANCHE: 43114,
};

export const AVALANCHE_MAINNET_PARAMS = {
  chainId: '0xa86a',
  chainName: 'Avalanche Mainnet C-Chain',
  nativeCurrency: {
    name: 'Avalanche',
    symbol: 'AVAX',
    decimals: 18,
  },
  rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
  blockExplorerUrls: ['https://snowtrace.io/'],
};

export const AVALANCHE_TESTNET_PARAMS = {
  chainId: '0xa869',
  chainName: 'Avalanche Testnet C-Chain',
  nativeCurrency: {
    name: 'Avalanche',
    symbol: 'AVAX',
    decimals: 18,
  },
  rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
  blockExplorerUrls: ['https://testnet.snowtrace.io/'],
};

export const NETWORK_LABELS: {
  [key: number]: string;
} = {
  [ChainId.LOCALHOST]: 'Localhost',
  [ChainId.ETHEREUM]: 'Ethereum',
  [ChainId.FUJI]: 'Avalanche Fuji Testnet',
  [ChainId.AVALANCHE]: 'Avalanche Mainnet C-Chain',
};

export const NETWORK_LABELS_SHORT: {
  [key: number]: string;
} = {
  [ChainId.LOCALHOST]: 'Localhost',
  [ChainId.ETHEREUM]: 'Ethereum',
  [ChainId.FUJI]: 'Fuji',
  [ChainId.AVALANCHE]: 'Avalanche',
};

export const NATIVE_CURRENCY: {
  [key: number]: string;
} = {
  0: 'AVAX', // Default fallback
  [ChainId.LOCALHOST]: 'ETH',
  [ChainId.ETHEREUM]: 'ETH',
  [ChainId.FUJI]: 'AVAX',
  [ChainId.AVALANCHE]: 'AVAX',
};

export const Networks = {
  MainNet: 1,
  Ropsten: 3,
  Rinkeby: 4,
  Goerli: 5,
  Kovan: 42,
  Localhost: 31337,
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
      address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      symbol: 'WAVAX',
      name: 'WAVAX',
      decimals: 18,
      abi: ERC20ABI,
    },
  ],
};

export interface IERC1155 {
  address: string;
  abi: any;
}

export const COLLECTIONS_BY_NETWORK: {
  [key: number]: IERC1155[];
} = {
  [Networks.Localhost]: [
    {
      address: CONTINENTS_LOCALHOST_ADDRESS,
      abi: ContinentsAbi,
    },
  ],
  [Networks.Fuji]: [
    {
      address: CONTINENTS_FUJI_ADDRESS,
      abi: ContinentsAbi,
    },
  ],
  [Networks.Avalanche]: [
    {
      address: CONTINENTS_AVALANCHE_ADDRESS,
      abi: ContinentsAbi,
    },
  ],
};
