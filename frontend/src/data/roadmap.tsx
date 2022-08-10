import { RoadmapSection } from '../typings/roadmap';

export const roadmap: Array<RoadmapSection> = [
  {
    heading: 'Q2',
    tasks: [
      {
        name: 'Ideation',
        description: 'Business planning and creation of initial roadmap.',
        status: 'complete',
      },
      {
        name: 'NFT Design',
        description: 'Design of the first NFT series.',
        status: 'complete',
      },
      {
        name: 'Marketplace Development',
        description: 'Development of the Marketplace UI.',
        status: 'complete',
      },
    ],
  },
  {
    heading: 'Q3',
    tasks: [
      {
        name: 'Smart Contract Development',
        description:
          'Development of Smart Contracts for the Marketplace and NFTs.',
        status: 'complete',
      },
      {
        name: 'Smart Contract Integration',
        description: 'Update the UI to interact with the Smart Contracts.',
        status: 'current',
      },
    ],
  },
  {
    heading: 'Q4',
    tasks: [
      {
        name: 'NFT Minting',
        description: 'Minting of the first series of NFTs.',
        status: 'upcoming',
      },
      {
        name: 'Platform Launch',
        description: 'Launch of Hodo Network Marketplace.',
        status: 'upcoming',
      },
      {
        name: 'Addition of more Wallets',
        description:
          "MetaMask is the first wallet connector. Now we'll begin adding more options.",
        status: 'upcoming',
      },
      {
        name: 'User Submitted NFTs',
        description:
          'Allow users to post their own NFTs for sale in the marketplace.',
        status: 'upcoming',
      },
    ],
  },
  {
    heading: 'Q1',
    tasks: [
      {
        name: 'Bidding Service',
        description: 'Allow users to bid on NFTs in an auction style format.',
        status: 'upcoming',
      },
    ],
  },
];
