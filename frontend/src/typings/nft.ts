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

export type Attribute = {
    display_type?: string;
    trait_type: string;
    value: string | number;
};

export type Metadata = {
    name: string;
    description?: string;
    image: string;
    attributes?: Array<Attribute>;
};

export interface NFT {
    id: string;
    tokenId: string;
    tokenURI: string;
    name: string;
    description?: string;
    image: string;
    lat: number;
    lng: number;
    contractAddress: string;
    contractName: string;
    contractVerified: number;
    owner_address: string;
    creator: string;
    supply: string;
    amount: string;
    price: number;
    created_at: string;
    tx_hash: string;
    is_deleted: number;
    sold: number;
}

export interface Collection {
    id: string;
    name: string;
    description: string;
    banner?: string;
    thumbnail: string;
    contractAddress: string;
    network: number;
    website?: string;
    twitter?: string;
    discord?: string;
    telegram?: string;
    verified: 0 | 1;
    status?: string;
}
