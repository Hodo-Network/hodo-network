// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract HodoNFT is ERC1155 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // TODO: replace endpoint
    constructor() ERC1155("https://hodo.network/api/item/{id}.json") {
        _tokenIds.increment();
    }

    function mintNFT(uint256 _amount, bytes memory _data)
        public
        returns (uint256)
    {
        require(msg.sender != address(0), "caller address cannot be zero");
        uint256 NFTid;
        NFTid = _tokenIds.current();
        _mint(msg.sender, NFTid, _amount, _data);
        _tokenIds.increment();
        return NFTid;
    }

    function mintBatchNFT(
        uint256 _idQuantity,
        uint256[] memory _amount,
        bytes memory _data
    ) public returns (uint256[] memory) {
        require(msg.sender != address(0), "caller address cannot be zero");
        require(
            _idQuantity == _amount.length,
            "idQuantity must be equal to _amount quantity"
        );

        uint256[] memory ids = new uint256[](_idQuantity);
        for (uint256 i = 0; i < _amount.length; i++) {
            uint256 id = _tokenIds.current();
            _tokenIds.increment();

            ids[i] = (id);
        }
        _mintBatch(msg.sender, ids, _amount, _data);
        return ids;
    }

    function supply() public view returns (uint256) {
        return _tokenIds.current();
    }
}
