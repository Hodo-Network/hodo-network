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
    // location: NFTLocation;
    lat: string;
    long: string;
}

export type Data<V extends Vendor> = V extends Vendor.HODO_NETWORK
    ? HodoNetworkNFT
    : never;

// export type NFT<V extends Vendor = any> = {
export type NFT = {
    id: string;
    name: string;
    description: string;
    // price: NFTPrice;
    price: number;
    image: string;
    created_at: string;
    owner_address: string;
    contractAddress: string;
    creator: string;
    tx_hash: string;
    supply: string;
    is_deleted: number;
    sold: number;
    tokenId: string;
    category: string;
    lat: number;
    long: number;
    rarity: NFTRarity;
    amount: string;
    // vendor: Vendor;
    // data: Data<V>;
    // activeOrderId: string | null;
    // url: string;
}

export type Collection = {
    id: string;
    name: string;
    image: string;
}
