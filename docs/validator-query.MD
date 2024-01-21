# Fetching Validator Addresses from f(x)Core Blockchain

This project fetches validator addresses from the f(x)Core blockchain and writes the first 20 unique addresses to a CSV file.

## Approach

1. We make a GET request to the f(x)Core blockchain API at 'https://fx-json.functionx.io:26657/genesis'.
2. The API returns a JSON response that includes a list of transactions (`gen_txs`), each containing one or more messages.
3. Each message may contain a `validator_address`.
4. We extract all `validator_address` values from the messages, ensuring that they are unique by using a `Set`.
5. We then take the first 20 unique validator addresses and write them to a CSV file named 'genesis_validators.csv'.

## Running the Project

1. Install the dependencies:

```bash
yarn install
```

## Compile and run the TypeScript script:

```bash
npx ts-node src/validators/validator-query.ts
```

## Report generation
This will create a CSV file named 'genesis_validators.csv' in the project directory, containing the first 20 unique validator addresses from the f(x)Core blockchain.


