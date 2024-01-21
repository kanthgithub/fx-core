
import { Contract, Wallet } from 'ethers';
import { ethers, run } from 'hardhat';
const hre = require("hardhat");
import * as dotenv from 'dotenv';
dotenv.config()

// npx hardhat run src/erc20/scripts/deploy-token.ts --network ec2
export const deployERC20Token = async (name: string, symbol: string, decimals: number) => {
  try {
    const erc20TokenDeployFactoryContract = await ethers.getContractFactory('ERC20Token');
    // deploy the route
    const erc20TokenContract : Contract = (await erc20TokenDeployFactoryContract.deploy(name, symbol, decimals, ethers.utils.parseUnits('1000000', decimals))) as Contract;
    await erc20TokenContract.deployed();

    const erc20TokenAddress = erc20TokenContract.address;

    console.log(`✅ Deployed erc20Token to: ${erc20TokenAddress}`);
  } catch (error) {
    console.log(`Error in deploying ERC20Token on network: ${hre.network.name}`, error);
    return {
      success: false,
    };
  }
};


// Define a sleep function
function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

  deployERC20Token("FX Core Token", "FXCT", 18)
  .then(() => {
    console.log(`✅ finished running the deployment of NFT on network ${hre.network.name}`);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

