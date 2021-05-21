const { Contract } = require("ethers");
const hre = require("hardhat");

// Enter your deployed contract address
const TOKEN_CONTRACT_ADDR = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const deployerAddress =
  "0x56289e99c94b6912bfc12adc093c9b51124f0dc54ac7a766b2bc5ccf558d8027";

/**
 * Empty. Try calling some functions here.
 */
async function main() {
  const [owner] = await ethers.getSigners();
  const NFTSimple = await hre.ethers.getContractFactory("NFTSimple");
  const simpleNft = await NFTSimple.deploy();
  const ownerBalance = await simpleNft.balanceOf(owner.address, 0);
  const test = await simpleNft.uri();
  // await simpleNft.deployed();

  console.log("NFTSimple deployed to:", simpleNft.address);
  console.log("Total supply", test);
  console.log("Owner Balance:", ownerBalance);

  // functions: {
  //   'GOLD()': [FunctionFragment],
  //   'SHIELD()': [FunctionFragment],
  //   'SILVER()': [FunctionFragment],
  //   'SWORD()': [FunctionFragment],
  //   'THORS_HAMMER()': [FunctionFragment],
  //   'balanceOf(address,uint256)': [FunctionFragment],
  //   'balanceOfBatch(address[],uint256[])': [FunctionFragment],
  //   'isApprovedForAll(address,address)': [FunctionFragment],
  //   'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)': [FunctionFragment],
  //   'safeTransferFrom(address,address,uint256,uint256,bytes)': [FunctionFragment],
  //   'setApprovalForAll(address,bool)': [FunctionFragment],
  //   'supportsInterface(bytes4)': [FunctionFragment],
  //   'uri(uint256)': [FunctionFragment]
  // },
}

/**
 * Takes a transaction response and calculates the amount of gas used and converts
 * it to AVAX. Prints results to console.
 *
 * @param {TransactionResponse} tx transactionn to extract gas info from
 * @param {string} methodName Name of method to print
 */
async function calculateGasFee(tx, methodName) {
  const gasPrice = 225000000000;
  const weiPerAvax = Number("1000000000000000000");

  const txReceipt = await tx.wait();
  const gasUsed = txReceipt.gasUsed.toString();
  const avax = (gasUsed * gasPrice) / weiPerAvax;
  console.log(methodName, "gas used:", gasUsed);
  console.log(methodName, "AVAX cost:", avax);
}

/**
 * Calls transfer on the provided contract. Transfers the ERC20 from the from signer
 * to the to signer for the amount of amount.
 *
 * @param {Signer} from signer to send from
 * @param {Signer} to signer to send to
 * @param {number} amount amount to send
 * @param {Contract} coinContract ERC20 contract to call
 */
async function sendERC20(from, to, amount, coinContract) {
  const coin = coinContract.connect(from);
  tx = await coin.transfer(to.getAddress(), amount);

  await calculateGasFee(tx, "Transfer");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
