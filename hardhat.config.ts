import * as dotenv from 'dotenv'
import {HardhatUserConfig} from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
dotenv.config()

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.20',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5', // or 'ethers-v6' if you're using ethers.js v6
  },
  paths: {
    sources: "./src/erc20", // specify the path to your contracts here
  },
  networks: {
    ec2: {
      url: process.env.EC2_CHAIN_RPC,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
}

export default config
