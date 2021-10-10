// import * as hodoNetwork from './hodo_network';

export enum Vendor {
    HODO_NETWORK = 'hodo_network',
}

// export type ContractName = hodoNetwork.ContractName;

export enum TransferType {
    SAFE_TRANSFER_FROM = 0,
    TRANSFER_FROM = 1,
    TRANSFER = 2
}

export enum NFTRarity {
    RARE = 'rare',
    EPIC = 'epic',
    COMMON = 'common',
}

export type NFTLocation = {
    lat: number;
    long: number;
}

export type NFTPrice = {
    value: number;
    units: string;
}

export type HodoNetworkNFT = {
    description: string;
    rarity: NFTRarity;
    location: NFTLocation;
}

export type Data<V extends Vendor> = V extends Vendor.HODO_NETWORK
    ? HodoNetworkNFT
    : never;

export type NFT<V extends Vendor = any> = {
    id: string;
    contractAddress: string
    tokenId: string
    // activeOrderId: string | null
    owner: string
    name: string;
    category: string;
    image: string;
    // url: string;
    vendor: Vendor;
    data: Data<V>;
    price: NFTPrice;
}

export type Collection = {
    id: string;
    name: string;
    image: string;
}
