require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
require("./tasks/accounts");
require("./tasks/balances");

const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.7",
      },
    ],
  },
  networks: {
    hardhat: {
      gasPrice: 225000000000,
      chainId: 43112,
    },
    avash: {
      url: "http://localhost:9650/ext/bc/C/rpc",
      gasPrice: 225000000000,
      chainId: 43112,
      accounts: [
        privateKey,
        "defb657158deebf0c04a87ce93580aae66626a09053f666cf16c08d1ae47f845",
        "740ffefbd711aeaf3cc4604bec5d36f0977f833a3db2af50e52dea378f2ccb1f",
      ],
    },
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [
        privateKey,
        "defb657158deebf0c04a87ce93580aae66626a09053f666cf16c08d1ae47f845",
        "740ffefbd711aeaf3cc4604bec5d36f0977f833a3db2af50e52dea378f2ccb1f",
      ],
    },
    mainnet: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: [privateKey],
    },
  },
};
