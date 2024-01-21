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

### environment settings

- refer the .env template:
 [.env.example](.env.example)
- copy to a new file `.env`
- set the `EC2_CHAIN_RPC` with the value communicated via email
- set your privateKey in `PRIVATE_KEY`
