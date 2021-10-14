// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Countries is ERC1155 {
    address operator = msg.sender;

    uint16 public common_supply = 10**4;
    uint16 public epic_supply = 10**2;
    uint16 public rare_supply = 10**1;

    uint256 private constant AFGHANISTAN_COMMON = 0;
    uint256 private constant AFGHANISTAN_EPIC = 1;
    uint256 private constant AFGHANISTAN_RARE = 2;
    uint256 private constant ALBANIA_COMMON = 3;
    uint256 private constant ALBANIA_EPIC = 4;
    uint256 private constant ALBANIA_RARE = 5;
    uint256 private constant ALGERIA_COMMON = 6;
    uint256 private constant ALGERIA_EPIC = 7;
    uint256 private constant ALGERIA_RARE = 8;

    uint256[] countryIds = [
        AFGHANISTAN_COMMON,
        AFGHANISTAN_EPIC,
        AFGHANISTAN_RARE,
        ALBANIA_COMMON,
        ALBANIA_EPIC,
        ALBANIA_RARE,
        ALGERIA_COMMON,
        ALGERIA_EPIC,
        ALGERIA_RARE
    ];
    uint256[] supplies = [
        common_supply,
        epic_supply,
        rare_supply,
        common_supply,
        epic_supply,
        rare_supply,
        common_supply,
        epic_supply,
        rare_supply
    ];

    constructor()
        public
        ERC1155(
            "https://raw.githubusercontent.com/Hodo-Network/hodo-network.github.io/main/metadata/{id}.json"
        )
    {
        _mintBatch(operator, countryIds, supplies, "0x01");
    }

    function createToken(
        address account,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public {
        _mintBatch(account, ids, amounts, data);
    }

    function getIds() public view returns (uint256[] memory) {
        return countryIds;
    }
}
