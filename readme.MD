## fx-core tools

This is a repo with scripts to query
- deploy erc20 token to a private chain running on ec2
- fx-core blockchain
- fx-bridge contract details and locked tokens

## ERC20 token on private evm chain

- A private evm chain is running on ec2
- The code contains a simple ERC20 token
- deployment script to deploy ERC20 token to custom chain
  - token address: 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9
  - token Name: FX Core Token
  - token Symbol: FXCT
  - token Decimals: 18
- Deployed token can be imported on the metamask or any other wallet

- Initial mint of 1000000 FXCT tokens are minted to deployer address
- tokens should be visible from your wallet
- My Deployer Address: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
- User who does deployment can get those initial set of tokens on their address

### Code directory
[ERC20](./src/erc20/)

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