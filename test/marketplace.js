describe("Marketplace", function () {
  it("Should create and execute market sales", async function () {
    const Market = await ethers.getContractFactory("Marketplace");
    const market = await Market.deploy();
    await market.deployed();
    const marketAddress = market.address;

    const Continents = await ethers.getContractFactory("Continents");
    const continents = await Continents.deploy(marketAddress);
    await continents.deployed();
    const continentsContractAddress = continents.address;

    let listingPrice = await market.getListingPrice();
    listingPrice = listingPrice.toString();

    const auctionPrice = ethers.utils.parseUnits("1", "ether");

    await continents.createToken("https://www.mytokenlocation.com");
    await continents.createToken("https://www.mytokenlocation2.com");

    await market.createMarketItem(continentsContractAddress, 1, auctionPrice, {
      value: listingPrice,
    });
    await market.createMarketItem(continentsContractAddress, 2, auctionPrice, {
      value: listingPrice,
    });

    const [_, buyerAddress] = await ethers.getSigners();

    await market
      .connect(buyerAddress)
      .createMarketSale(continentsContractAddress, 1, { value: auctionPrice });

    items = await market.fetchMarketItems();
    items = await Promise.all(
      items.map(async (i) => {
        const tokenUri = await continents.tokenURI(i.tokenId);
        let item = {
          price: i.price.toString(),
          tokenId: i.tokenId.toString(),
          seller: i.seller,
          owner: i.owner,
          tokenUri,
        };
        return item;
      })
    );
    console.log("items: ", items);
  });
});
