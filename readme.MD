## fx-core tools

This is a repo with scripts to query
- deploy erc20 token to a private chain running on ec2
- fx-core blockchain
- fx-bridge contract details and locked tokens

## ERC20 token on private evm chain

- this module contains the erc20 token deployment to a private chain running on ec2 instance.
- all details and instructions for this are in readme file for erc20:
[erc20-private-chain](./docs/erc20-private-chain.MD)

## fx-bridge query module

- the script to query fx-bridge contract on ethereum chain 
- the script details and other readme can be accessed at:
  [fx-bridge-query](./docs/fx-bridge-query.MD)

- output sample can be located in project root-directory
  [fx-bridge-token-supply.csv](./fx-bridge-token-supply.csv)

## fx-core validators module

- this module is in a branch and please checkout the branch `feature/validators-query`

```bash
git checkout feature/validators-query
```

- after checking out the branch, please follow the instructions at:
 [validator-query](./docs/validator-query.MD)