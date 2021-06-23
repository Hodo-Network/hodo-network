import { RoadmapSection } from "../typings/roadmap";

export const roadmap: Array<RoadmapSection> = [
  {
    heading: "Q1",
    tasks: [
      {
        name: "Ideation",
        description: "Business planning and creation of initial roadmap.",
        status: "complete",
      },
      {
        name: "NFT Design",
        description: "Design of the first NFT series.",
        status: "complete",
      },
      {
        name: "Marketplace Development",
        description: "Development of the Marketplace UI.",
        status: "current",
      },
    ],
  },
  {
    heading: "Q2",
    tasks: [
      {
        name: "NFT Smart Contract Development",
        description: "Development of the Smart Contracts for NFTs.",
        status: "current",
      },
      {
        name: "NFT Minting",
        description: "Minting of the NFTs.",
        status: "upcoming",
      },
      {
        name: "Platform Launch",
        description:
          "Launch of the MVP allowing users to buy the first series of NFTs.",
        status: "upcoming",
      },
    ],
  },
  {
    heading: "Q3",
    tasks: [
      {
        name: "Addition of more Wallets",
        description:
          "MetaMask is the first wallet connector. Now we'll begin adding Ledger, Trezor, etc.",
        status: "upcoming",
      },
      {
        name: "User Submitted NFTs",
        description:
          "Allow users to post their own NFTs for sale in the marketplace.",
        status: "upcoming",
      },
    ],
  },
  {
    heading: "Q4",
    tasks: [
      {
        name: "Bidding Service",
        description: "Allow users to bid on NFTs in an auction style format.",
        status: "upcoming",
      },
      {
        name: "Explore X-Chain NFTs",
        description:
          "Explore the idea of allowing X-Chain NFTs to be listed in the marketplace.",
        status: "upcoming",
      },
    ],
  },
];
