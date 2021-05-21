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

  const CountryCollection = await ethers.getContractFactory("CountryCollection");
  const collection = await CountryCollection.deploy();
  await collection.deployed();

  console.log("CountryCollection address:", collection.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(collection);
}

function saveFrontendFiles(collection) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../frontend/src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify({ CountryCollection: collection.address }, undefined, 2)
  );

  const CountryCollectionArtifact = artifacts.readArtifactSync("CountryCollection");

  fs.writeFileSync(
    contractsDir + "/CountryCollection.json",
    JSON.stringify(CountryCollectionArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
