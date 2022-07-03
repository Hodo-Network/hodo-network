import { Collection } from '../typings/nft';

export const collections: Array<Collection> = [
    {
        id: 'BZTDWRaK6rQmnSLrrq4PANBeueYfDRFkpHV9KcMtjxL19wsJ1',
        name: 'Continents',
        description: '',
        image: "/assets/images/globe.jpg",
        contractAddress: "0x0000000000000000000000000000000000000000",
        network: 43113,
        verified: 0,
    },
    {
        id: 'RFkpHV9KcMtjxL19wsJ1BZTDWRaK6rQmnSLrrq4PANBeueYfD',
        name: 'Countries',
        description: '',
        // image: "ipfs://QmQBSaJvXv3SfYMpEEyVzhtUCquhTFxvo5F7gvhLRGvMuB",
        image: '/assets/images/afghanistan.png',
        contractAddress: "0x0000000000000000000000000000000000000001",
        network: 43113,
        verified: 0,
        status: 'featured'
    },
    {
        id: 'RFkpHV9KcMtjxL19wsJ1BZTDWRaK6rQmnSLrrq4PANBeueYfD',
        name: 'Capitals',
        description: '',
        image: "/assets/images/globe.jpg",
        contractAddress: "0x0000000000000000000000000000000000000002",
        network: 1,
        verified: 1,
        status: 'featured'
    },
    {
        id: 'RFkpHV9KcMtjxL19wsJ1BZTDWRaK6rQmnSLrrq4PANBeueYfD',
        name: 'Monuments',
        description: '',
        image: "/assets/images/globe.jpg",
        contractAddress: "0x0000000000000000000000000000000000000003",
        network: 43113,
        verified: 0,
        status: 'featured'
    }
];
