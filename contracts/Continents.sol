// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Continents is ERC1155 {
    uint256 public constant AFRICA = 0;
    uint256 public constant ANTARCTICA = 1;
    uint256 public constant ASIA = 2;
    uint256 public constant AUSTRALIA = 3;
    uint256 public constant EUROPE = 4;
    uint256 public constant NORTH_AMERICA = 5;
    uint256 public constant OCEANIA = 6;
    uint256 public constant SOUTH_AMERICA = 7;

    // TODO: update endpoint
    constructor() ERC1155("https://raw.githubusercontent.com/Hodo-Network/hodo-network.github.io/main/metadata/Continents/{id}.json") {
        _mint(msg.sender, AFRICA, 500, "");
        _mint(msg.sender, ANTARCTICA, 500, "");
        _mint(msg.sender, ASIA, 500, "");
        _mint(msg.sender, AUSTRALIA, 500, "");
        _mint(msg.sender, EUROPE, 500, "");
        _mint(msg.sender, NORTH_AMERICA, 500, "");
        _mint(msg.sender, OCEANIA, 500, "");
        _mint(msg.sender, SOUTH_AMERICA, 500, "");
    }

    function uri(uint256 _tokenId) override public view returns (string memory) {
        return string(
            abi.encodePacked(
                "https://raw.githubusercontent.com/Hodo-Network/hodo-network.github.io/main/metadata/Continents/",
                Strings.toString(_tokenId),
                ".json"
            )
        );
    }
}
