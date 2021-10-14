// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Continents is ERC1155 {
    address marketplaceAddress;
    uint256 public constant AFRICA = 0;
    uint256 public constant ANTARCTICA = 1;
    uint256 public constant ASIA = 2;
    uint256 public constant AUSTRALIA = 3;
    uint256 public constant EUROPE = 4;
    uint256 public constant NORTH_AMERICA = 5;
    uint256 public constant OCEANIA = 6;
    uint256 public constant SOUTH_AMERICA = 7;

    uint256[] itemIds = [
        AFRICA,
        ANTARCTICA,
        ASIA,
        AUSTRALIA,
        EUROPE,
        NORTH_AMERICA,
        OCEANIA,
        SOUTH_AMERICA
    ];
    uint256[] supplies = [500, 500, 500, 500, 500, 500, 500, 500];

    // TODO: update endpoint
    constructor(address contractAddress)
        ERC1155(
            "https://raw.githubusercontent.com/Hodo-Network/hodo-network.github.io/main/metadata/Continents/{id}.json"
        )
    {
        marketplaceAddress = contractAddress;
        _mintBatch(msg.sender, itemIds, supplies, "0x01");
        setApprovalForAll(marketplaceAddress, true);
    }

    function getIds() public view returns (uint256[] memory) {
        return itemIds;
    }

    function uri(uint256 _tokenId)
        public
        view
        override
        returns (string memory)
    {
        return
            string(
                abi.encodePacked(
                    "https://raw.githubusercontent.com/Hodo-Network/hodo-network.github.io/main/metadata/Continents/",
                    Strings.toString(_tokenId),
                    ".json"
                )
            );
    }
}
