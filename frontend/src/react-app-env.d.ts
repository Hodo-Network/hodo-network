/// <reference types="react-scripts" />

declare module '@pinata/ipfs-gateway-tools/dist/browser';

interface Window {
  ethereum?: {
    isMetaMask?: true;
    on?: (...args: any[]) => void;
    removeListener?: (...args: any[]) => void;
  };
  web3?: {};
}
