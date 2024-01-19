import { ethers, Provider } from "ethers";

export const HTTP_URL_MAPPINGS: Record<number, string> = {
  1: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
}

export const FXBRIDGE_ADDRESS: Record<number, string> = {
  1: '0x6f1D09Fed11115d65E1071CD2109eDb300D80A27',
}

export const getProvider = (chainId: number): Provider => {
  return new ethers.JsonRpcProvider(HTTP_URL_MAPPINGS[chainId]);
}

export const getBlockNumber = async (chainId: number): Promise<number> => {
  return await getProvider(chainId).getBlockNumber();
}

export const getContractInstance = (chainId: number, contractAddress: string, abi: any): ethers.Contract => {
  return new ethers.Contract(contractAddress, abi, getProvider(chainId));
}
