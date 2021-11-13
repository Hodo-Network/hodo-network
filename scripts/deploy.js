// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.
async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Marketplace = await ethers.getContractFactory("Marketplace");
  const marketplace = await Marketplace.deploy();
  await marketplace.deployed();

  console.log("Marketplace address:", marketplace.address);

  const Continents = await ethers.getContractFactory("Continents");
  const continents = await Continents.deploy(marketplace.address);
  await continents.deployed();

  console.log("Continents address:", continents.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(marketplace, continents);
}

function saveFrontendFiles(marketplace, continents) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../frontend/src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify(
      { Marketplace: marketplace.address, Continents: continents.address },
      undefined,
      2
    )
  );

  const MarketplaceArtifact = artifacts.readArtifactSync("Marketplace");
  const ContinentsArtifact = artifacts.readArtifactSync("Continents");

  fs.writeFileSync(
    contractsDir + "/Marketplace.json",
    JSON.stringify(MarketplaceArtifact, null, 2)
  );

  fs.writeFileSync(
    contractsDir + "/Continents.json",
    JSON.stringify(ContinentsArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
