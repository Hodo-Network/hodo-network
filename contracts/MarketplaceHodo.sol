//SPDX-License-Identifier: un-licensed
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MarketPlace1155 is ERC1155Holder, Ownable {
    event TradeStatusChange(uint256 indexed itemId, bytes32 status);
    event PriceChange(uint256 oldPrice, uint256 newPrice);

    IERC1155 itemToken;
    struct Trade {
        address payable poster;
        uint256 itemId;
        uint256 amount; // in  wei
        uint256 price; // in  wei
        bytes32 status; // e.g Open, Executed, Cancelled
    }

    mapping(uint256 => Trade) private trades;

    uint256 private tradeCounter;

    constructor(address _itemTokenAddress) {
        itemToken = IERC1155(_itemTokenAddress);
        tradeCounter = 0;
    }

    // Get individual trade
    function getTrade(uint256 _trade) public view returns (Trade memory) {
        Trade memory trade = trades[_trade];
        return trade;
    }

    /* 
    List item in the market place for sale
    item unique id and amount of tokens to be put on sale price of item
    and an additional data parameter. If you dont want to pass data set it to empty string 
    if your sending the transaction through Frontend 
    else if you are send the transaction using etherscan or using nodejs set it to 0x00 
    */

    function openTrade(
        uint256 _itemId,
        uint256 _amount,
        uint256 _price,
        bytes calldata data
    ) public {
        require(
            itemToken.balanceOf(msg.sender, _itemId) != 0,
            "Error: Only owner can list"
        );
        itemToken.safeTransferFrom(
            payable(msg.sender),
            address(this),
            _itemId,
            _amount,
            data
        );
        trades[tradeCounter] = Trade({
            poster: payable(msg.sender),
            itemId: _itemId,
            amount: _amount,
            price: _price,
            status: "Open"
        });

        tradeCounter += 1;
        emit TradeStatusChange(tradeCounter - 1, "Open");
    }

    /*
    Buyer execute trade and pass the trade number
    and an additional data parameter if you dont want to pass data set it to empty string 
    if your sending the transaction through Frontend 
    else if you are send the transaction using etherscan or using nodejs set it to 0x00 
    */

    function executeTrade(uint256 _trade, bytes calldata data) public payable {
        Trade memory trade = trades[_trade];

        require(trade.status == "Open", "Error: Trade is not Open");
        require(
            msg.sender != address(0) && msg.sender != trade.poster,
            "Error: msg.sender is zero address or the owner is trying to buy his own nft"
        );
        require(
            trade.price == msg.value,
            "Error: value provided is not equal to the nft price"
        );

        payable(trade.poster).transfer(msg.value);
        itemToken.safeTransferFrom(
            address(this),
            payable(msg.sender),
            trade.itemId,
            trade.amount,
            data
        );
        trades[_trade].status = "Executed";
        trades[_trade].poster = payable(msg.sender);
        emit TradeStatusChange(_trade, "Executed");
    }

    /*
    Seller can cancle trade by passing the trade number
    and an additional data parameter if you dont wan to pass data set it to empty string 
    if your sending the transaction through Frontend 
    else if you are send the transaction using etherscan or using nodejs set it to 0x00 
    */

    function cancelTrade(uint256 _trade, bytes calldata data) public {
        Trade memory trade = trades[_trade];
        require(
            msg.sender == trade.poster,
            "Error: Trade can be cancelled only by poster"
        );
        require(trade.status == "Open", "Error: Trade is not Open");
        itemToken.safeTransferFrom(
            address(this),
            trade.poster,
            trade.itemId,
            trade.amount,
            data
        );
        trades[_trade].status = "Cancelled";
        emit TradeStatusChange(_trade, "Cancelled");
    }

    // Get all items which are on sale in the market place
    function getAllOnSale() public view virtual returns (Trade[] memory) {
        uint256 counter = 0;
        uint256 itemCounter = 0;
        for (uint256 i = 0; i < tradeCounter; i++) {
            if (trades[i].status == "Open") {
                counter++;
            }
        }

        Trade[] memory tokensOnSale = new Trade[](counter);
        if (counter != 0) {
            for (uint256 i = 0; i < tradeCounter; i++) {
                if (trades[i].status == "Open") {
                    tokensOnSale[itemCounter] = trades[i];
                    itemCounter++;
                }
            }
        }

        return tokensOnSale;
    }

    // get all items owned by a particular address
    function getAllByOwner(address owner) public view returns (Trade[] memory) {
        uint256 counter = 0;
        uint256 itemCounter = 0;
        for (uint256 i = 0; i < tradeCounter; i++) {
            if (trades[i].poster == owner) {
                counter++;
            }
        }

        Trade[] memory tokensByOwner = new Trade[](counter);
        if (counter != 0) {
            for (uint256 i = 0; i < tradeCounter; i++) {
                if (trades[i].poster == owner) {
                    tokensByOwner[itemCounter] = trades[i];
                    itemCounter++;
                }
            }
        }

        return tokensByOwner;
    }

    /*
    Seller can lowner the price of item by specifing trade number and new price
    if he wants to increase the price of item, he can unlist the item and then specify a higher price
    */
    function lowerTokenPrice(uint256 _trade, uint256 newPrice) public {
        require(
            msg.sender == trades[_trade].poster,
            "Error: Price can only be set by poster"
        );
       
        require(trades[_trade].status == "Open", "Error: Trade is not Open");

        uint256 oldPrice = trades[_trade].price;
        require(
            newPrice < oldPrice,
            "Error: please specify a price value less than the old price. If you want to increase the price, cancel the trade and list again  with a higher price"
        );
        trades[_trade].price = newPrice;
        emit PriceChange(oldPrice, newPrice);
    }
}
