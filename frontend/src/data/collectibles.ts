import { NFT, NFTCategory, NFTRarity, Vendor } from '../typings/nft';
// https://www.latlong.net/

export const collectibles: Array<NFT> = [
    {
        id: 'BZTDWRaK6rQmnSLrrq4PANBeueYfDRFkpHV9KcMtjxL19wsJ1',
        contractAddress: '0x0000000000000000000000000000000000000000',
        // tokenId: 'BZTDWRaK6rQmnSLrrq4PANBeueYfDRFkpHV9KcMtjxL19wsJ1',
        // activeOrderId: null,
        owner: '0x',
        name: "Cape Town",
        category: NFTCategory.CAPITAL,
        image: "https://gateway.pinata.cloud/ipfs/QmWdDjeh7R5K9w7uzh7bSMgmuDoNTMYXVY5ER69LdHwWc4",
        data: {
            description: 'Capital City of South Africa.',
            rarity: NFTRarity.EPIC,
            location: {
                lat: -33.924870,
                long: 18.424055,
            },
        },
        vendor: Vendor.HODO_NETWORK,
        price: {
            value: 1,
            units: "AVAX"
        },
    },
    {
        id: 'BZTDWRaK6rQmnSLrrq4PANBeueYfDRFkpHV9KcMtjxL19wsJ2',
        contractAddress: '0x0000000000000000000000000000000000000000',
        // tokenId: 'BZTDWRaK6rQmnSLrrq4PANBeueYfDRFkpHV9KcMtjxL19wsJ2',
        // activeOrderId: null,
        owner: '0x',
        name: "Bangkok",
        category: NFTCategory.CAPITAL,
        image:
            "https://images.unsplash.com/photo-1452838269443-c86e6a3134f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
        data: {
            description: 'Capital City of Thailand.',
            rarity: NFTRarity.RARE,
            location: {
                lat: 13.756331,
                long: 100.501762,
            },
        },
        vendor: Vendor.HODO_NETWORK,
        price: {
            value: 1,
            units: "AVAX"
        },
    },
    {
        id: 'BZTDWRaK6rQmnSLrrq4PANBeueYfDRFkpHV9KcMtjxL19wsJ3',
        contractAddress: '0x0000000000000000000000000000000000000000',
        // tokenId: 'BZTDWRaK6rQmnSLrrq4PANBeueYfDRFkpHV9KcMtjxL19wsJ3',
        // activeOrderId: null,
        owner: '0x',
        name: "Jakarta",
        category: NFTCategory.CAPITAL,
        image:
            "https://images.unsplash.com/photo-1452838269443-c86e6a3134f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
        data: {
            description: 'Capital City of Indonesia.',
            rarity: NFTRarity.RARE,
            location: {
                lat: -6.175110,
                long: 106.865036,
            },
        },
        vendor: Vendor.HODO_NETWORK,
        price: {
            value: 1,
            units: "AVAX"
        },
    },
    {
        id: 'BZTDWRaK6rQmnSLrrq4PANBeueYfDRFkpHV9KcMtjxL19wsJ4',
        contractAddress: '0x0000000000000000000000000000000000000000',
        // tokenId: 'BZTDWRaK6rQmnSLrrq4PANBeueYfDRFkpHV9KcMtjxL19wsJ4',
        // activeOrderId: null,
        owner: '0x',
        name: "Guatemala City",
        category: NFTCategory.CAPITAL,
        image:
            "https://images.unsplash.com/photo-1452838269443-c86e6a3134f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
        data: {
            description: 'Capital City of Guatemala.',
            rarity: NFTRarity.COMMON,
            location: {
                lat: 14.634915,
                long: -90.506882,
            },
        },
        vendor: Vendor.HODO_NETWORK,
        price: {
            value: 0.5,
            units: "AVAX"
        },
    },
    {
        id: 'BZTDWRaK6rQmnSLrrq4PANBeueYfDRFkpHV9KcMtjxL19wsJ5',
        contractAddress: '0x0000000000000000000000000000000000000000',
        // tokenId: 'BZTDWRaK6rQmnSLrrq4PANBeueYfDRFkpHV9KcMtjxL19wsJ5',
        // activeOrderId: null,
        owner: '0x',
        name: "Jamestown",
        category: NFTCategory.CAPITAL,
        image:
            "https://images.unsplash.com/photo-1452838269443-c86e6a3134f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
        data: {
            description: 'Capital City of Saint Helena.',
            rarity: NFTRarity.COMMON,
            location: {
                lat: 36.434269,
                long: -84.935371,
            },
        },
        vendor: Vendor.HODO_NETWORK,
        price: {
            value: 0.5,
            units: "AVAX"
        },
    },
    {
        id: 'QmQBSaJvXv3SfYMpEEyVzhtUCquhTFxvo5F7gvhLRGvMuB',
        contractAddress: '0x0000000000000000000000000000000000000000',
        // tokenId: 'QmQBSaJvXv3SfYMpEEyVzhtUCquhTFxvo5F7gvhLRGvMuB',
        // activeOrderId: null,
        owner: '0x',
        name: "Afghanistan",
        category: NFTCategory.COUNTRY,
        image:
            "https://images.unsplash.com/photo-1574158676804-4d719c7eb7c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
        data: {
            description: 'Here is an NFT description 1.',
            rarity: NFTRarity.COMMON,
            location: {
                lat: 33.93911,
                long: 67.709953,
            },
        },
        vendor: Vendor.HODO_NETWORK,
        price: {
            value: 0.25,
            units: "AVAX"
        },
    },
    {
        id: 'QmWbUonVdzNyCMqAdFC2URpc9GXV5NwdeHbitxDcRzydfY',
        contractAddress: '0x0000000000000000000000000000000000000000',
        // tokenId: 'QmWbUonVdzNyCMqAdFC2URpc9GXV5NwdeHbitxDcRzydfY',
        // activeOrderId: null,
        owner: '0x',
        name: "Afghanistan",
        category: NFTCategory.COUNTRY,
        image:
            "https://images.unsplash.com/photo-1574158676804-4d719c7eb7c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
        data: {
            description: 'Here is an NFT description 2.',
            rarity: NFTRarity.EPIC,
            location: {
                lat: 33.93911,
                long: 67.709953,
            },
        },
        vendor: Vendor.HODO_NETWORK,
        price: {
            value: 1,
            units: "AVAX"
        },
    },
    {
        id: 'QmaLAahk2f1Qyvtz171thg85ArETnXyZm47fyepNvy9bnP',
        contractAddress: '0x0000000000000000000000000000000000000000',
        // tokenId: 'QmaLAahk2f1Qyvtz171thg85ArETnXyZm47fyepNvy9bnP',
        // activeOrderId: null,
        owner: '0x',
        name: "Afghanistan",
        category: NFTCategory.COUNTRY,
        image:
            "https://images.unsplash.com/photo-1574158676804-4d719c7eb7c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
        data: {
            description: 'Here is an NFT description 3.',
            rarity: NFTRarity.RARE,
            location: {
                lat: 33.93911,
                long: 67.709953,
            },
        },
        vendor: Vendor.HODO_NETWORK,
        price: {
            value: 1,
            units: "AVAX"
        },
    },
    {
        id: 'QmZ8ArvpTy9J4D9gMzsPgitwBm2NrGFhkQDBkEAhRFDAxp',
        contractAddress: '0x0000000000000000000000000000000000000000',
        // tokenId: 'QmZ8ArvpTy9J4D9gMzsPgitwBm2NrGFhkQDBkEAhRFDAxp',
        // activeOrderId: null,
        owner: '0x',
        name: "Andorra",
        category: NFTCategory.COUNTRY,
        image:
            "https://images.unsplash.com/photo-1574158676804-4d719c7eb7c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
        data: {
            description: 'Here is an NFT description 4.',
            rarity: NFTRarity.RARE,
            location: {
                lat: 42.506285,
                long: 1.521801,
            },
        },
        vendor: Vendor.HODO_NETWORK,
        price: {
            value: 1,
            units: "AVAX"
        },
    },
    {
        id: 'BZTDWRaK6rQmnSLrrq4PANBeueYfDRFkpHV9KcMtjxL19wsJ11',
        contractAddress: '0x0000000000000000000000000000000000000000',
        // tokenId: 'BZTDWRaK6rQmnSLrrq4PANBeueYfDRFkpHV9KcMtjxL19wsJ11',
        // activeOrderId: null,
        owner: '0x',
        name: "Australia",
        category: NFTCategory.COUNTRY,
        image:
            "https://images.unsplash.com/photo-1574158676804-4d719c7eb7c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
        data: {
            description: 'Here is an NFT description 5.',
            rarity: NFTRarity.COMMON,
            location: {
                lat: -25.274398,
                long: 133.775136,
            },
        },
        vendor: Vendor.HODO_NETWORK,
        price: {
            value: 0.5,
            units: "AVAX"
        },
    },
    {
        id: 'QmQWmYPT9xGgTwDS97q6JwPoBagKcGNYoaih2x8cArRPLm',
        contractAddress: '0x0000000000000000000000000000000000000000',
        // tokenId: 'QmQWmYPT9xGgTwDS97q6JwPoBagKcGNYoaih2x8cArRPLm',
        // activeOrderId: null,
        owner: '0x',
        name: "Argentina",
        category: NFTCategory.COUNTRY,
        image:
            "https://images.unsplash.com/photo-1574158676804-4d719c7eb7c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
        data: {
            description: 'Here is an NFT description 6.',
            rarity: NFTRarity.COMMON,
            location: {
                lat: -38.416097,
                long: -63.616672,
            },
        },
        vendor: Vendor.HODO_NETWORK,
        price: {
            value: 0.25,
            units: "AVAX"
        },
    },
];