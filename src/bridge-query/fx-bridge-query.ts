import FxBridgeAbi from '../abi/FxBridge.abi.json';
import { FXBRIDGE_ADDRESS, getBlockNumber, getContractInstance, getProvider } from "./provider-utils";
import fs from 'fs';

export type BridgeToken = {
    tokenAddress: string;
    tokenName: string;
    tokenSymbol: string;
    tokenDecimals: number;
    balance: string;
};

async function getTokenBalance(erc20Abi: any, tokenAddress: string, fxBridgeAddress: string, chainId: number): Promise<string> {
    const tokenContract = getContractInstance(chainId, tokenAddress, erc20Abi);
    const balance = await tokenContract.balanceOf(fxBridgeAddress);
    return balance.toString();
}

async function fetchBridgeTokens(chainId: number): Promise<BridgeToken[]> {

    const fxBridgeInstance = getContractInstance(chainId, FXBRIDGE_ADDRESS[chainId], FxBridgeAbi);
    const bridgeTokens = await fxBridgeInstance.getBridgeTokenList();

    const bridgeTokensJson: BridgeToken[] = [];

    const erc20Abi = [
        'function balanceOf(address account) view returns (uint256)',
    ];

    for (const [tokenAddress, tokenName, tokenSymbol, tokenDecimals] of bridgeTokens) {
        const balance = await getTokenBalance(erc20Abi, tokenAddress, FXBRIDGE_ADDRESS[chainId], chainId);
        bridgeTokensJson.push({
            tokenAddress,
            tokenName,
            tokenSymbol,
            tokenDecimals,
            balance,
        });
    }

    return bridgeTokensJson;
}


(async function main() {
    const bridgeTokens = await fetchBridgeTokens(1);
    console.log(`bridgeTokenList is: ${JSON.stringify(bridgeTokens, (key, value) => typeof value === 'bigint' ? value.toString() : value, 2)}`);
}
)();

//main().catch(console.error);


