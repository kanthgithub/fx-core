import { ethers } from "ethers";

// npx ts-node src/erc20/scripts/query-balance.ts
export const getBlockNumber = async () => {

 const provider = new ethers.JsonRpcProvider('http://ec2-13-233-156-135.ap-south-1.compute.amazonaws.com:8545');
 const blockNumber = await provider.getBlockNumber();
    console.log(`blockNumber: ${blockNumber}`);
    return blockNumber;
}

getBlockNumber().then(() => {
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });