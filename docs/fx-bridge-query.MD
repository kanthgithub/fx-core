# fx-bridge-query

- `fx-bridge-query` is a script built in TypeScript that queries the fxBridge smart contract on the Ethereum network
- Fetch a list of bridge tokens and the balance locked in FxBridge contract on a given EVM based chain

## How it's built

- The script first gets an instance of the fxBridge contract using the contract's ABI and address. 
- It then calls the `getBridgeTokenList` function of the contract to get a list of bridge tokens. 
- For each token, it creates a new contract instance using the ERC20 ABI and the token's address, and calls the `balanceOf` function to get the balance of the token in the fxBridge.

The script runs every 5 seconds for 1 minute, and writes the data (including the current timestamp and block height) to a CSV file.

## How to build

```bash
yarn
```

## How to run

1. Navigate to the project directory.

2. Run 

```bash
npx ts-node src/bridge-query/fx-bridge-query.ts
```

## Output

- output is a CSV file named `fx-bridge-token-supply.csv` in the project directory. 

- The file contains the following columns: timestamp, block height, token address, token name, token symbol, token decimals, and balance. Each row represents a bridge token at a specific point in time.