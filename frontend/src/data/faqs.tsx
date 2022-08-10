import { FAQ } from '../typings/faq';

export const faqs: Array<FAQ> = [
  {
    id: 1,
    question: 'What is an NFT?',
    answer:
      'A non-fungible token (NFT) is a special type of cryptographic token which represents something unique; non-fungible tokens are thus not mutually interchangeable. This is in contrast to cryptocurrencies like bitcoin, and many network or utility tokens that are fungible in nature.',
  },
  {
    id: 2,
    question: 'What is a gNFT?',
    answer:
      'A georeferenced non-fungible token (gNFT) is a specialized NFT which references a real world location; georeferenced non-fungible tokens are thus not mutually interchangeable and are tied to the geographic location in which they are purchased and this location is tracked in the transaction. gNFTs can be referred to as digital souvenirs.',
  },
  {
    id: 3,
    question: 'How does the Hodo Network work?',
    answer:
      'The Hodo Network is a platform where you can buy and sell gNFTs. It is the first of it’s kind and utilizes the Avalanche network to track and manage the digital assets.',
  },
  {
    id: 4,
    question: 'How can I buy a Hodo Network gNFT?',
    answer:
      "First you need to create a MetaMask wallet, if you don’t already have one, and connect it to the Avalanche network (<a href='https://www.youtube.com/watch?v=uHrBWHNl2Nc'>https://www.youtube.com/watch?v=uHrBWHNl2Nc</a>). Once you have the MetaMask wallet configured you can tranfer AVAX from your AVAX web wallet to your MetaMask address on the C-Chain. You then need to link your MetaMask wallet to the Hodo Network via the connect button at Hodo Network. Once your MetaMask wallet is linked and funded with AVAX you can purchase gNFTs on the Hodo Network. If you need any help acquiring the AVAX token to purchase our gNFTs please reach out to our admin!",
  },
  {
    id: 5,
    question: 'Is AVAX the only token I can use to purchase a gNFT?',
    answer: 'Yes. This is the only supported token on the Hodo Network.',
  },
  {
    id: 6,
    question:
      'Can I buy a gNFT if I am not in the physical location the gNFT was minted for?',
    answer:
      'There is the ability of purchase gNFTs that have been minted specifically for a location other than the location you are currently in. If the user that is selling the gNFT allows a foreign buyer then you may purchase the gNFT. You should understand that a gNFT that is purchased from outside the area it was minted for will be devalued versus a gNFT that maintains the integrity of being purchased within the originally intended area (a pure gNFT). ',
  },
  {
    id: 7,
    question: 'What are the different classifications of a gNFT?',
    answer: 'There are 3 classifications for gNFTs: Epic, Rare and Common.',
  },
  {
    id: 8,
    question: 'What is a ‘pure’ gNFT?',
    answer:
      'A pure gNFT is a gNFT that has always been purchased by users that were, at the time of purchase, located in the geographical location that the gNFT was minted for. This is the most valuable gNFT. It proves that the owner has always been in the correct geographical location when purchasing.',
  },
  {
    id: 9,
    question: 'How long is each series available for?',
    answer:
      'Each series will be available directly from the Hodo Network for 12-36 months. After this time the tokens that have not been sold will be burnt, effectively limiting the supply of tokens. Each series will have a unique burn date.',
  },
  {
    id: 10,
    question: 'How often are new series released?',
    answer:
      'We are on target to release a new series every 2-4 months, each series will have a different specific geographical specification. Keep an eye on our social media feeds for release information on future series!',
  },
  {
    id: 11,
    question: 'How many of each type are minted?',
    answer: 'Quantities are different for each classification and series. ',
  },
  {
    id: 12,
    question: 'Can I transfer my gNFT to another platform?',
    answer:
      'Yes, Hodo gNFTs will be able to be transferred but know that if you sell the gNFT on another platform and it is not properly georeferenced it’s value will be reduced. We recommend selling all your gNFTs on the Hodo Network to maintain the integrity of the gNFT.',
  },
  {
    id: 13,
    question: 'What features do you have planned for the future?',
    answer: "Please visit the <a href='/roadmap'>roadmap</a>!",
  },
  {
    id: 14,
    question: 'Which blockchain does the marketplace use?',
    answer:
      'The marketplace was built using the Avalanche blockchain. Assets are minted on the C-Chain.',
  },
  {
    id: 15,
    question:
      'Why were the assets minted on the C-Chain instead of the X-Chain?',
    answer:
      'The C-Chain is EVM compatible which will allow interoperability with other EVM chains in the future. Using the C-Chain also allows us to enable wallets like MetaMask for a better user experience.',
  },
  {
    id: 16,
    question: 'What token standard do the NFTs use?',
    answer:
      'The NFTs were minted using the ERC1155 token standard. This allows for multiple tokens to be represented by a single smart contract and unlocks some cost saving features like sending multiple tokens in a single transaction.',
  },
];
