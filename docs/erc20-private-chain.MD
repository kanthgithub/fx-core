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

## Private EVM node on EC2

- For a quick completion, i have started a hardhat node running on port 8545
- A New EC2 instance was spinned up and started the hardhat node via pm2 process
- Port 8545 was opened so that hardhat can listen to RPC requests from any client
- This can be restricted, ratelimited as an enhancement

## run Hardhat node on an AWS EC2 instance

You would need to install 
- Node.js
- Hardhat on your EC2 instance, then you can run your Hardhat node.

Here is a simple bash script that you can run on your EC2 console:

```sh
#!/bin/bash
# Install Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node
```

1. Install Hardhat

```sh
npm install --save-dev hardhat
```

### To set up a more permanent process using a tool like pm2

1. Install pm2 on your EC2 instance. You can do this with npm:

```sh
npm install -g pm2
```

2. setup a hardhat lean project which contain only hardhat.config.ts

```sh
npx hardhat
```

- This will create a lean hardhat config:

```js
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
};

export default config;
```

3. Start your Hardhat node with pm2:

```sh
pm2 start --name hardhat npx -- hardhat node --hostname 0.0.0.0
```

4. To ensure that your Hardhat node starts up if the EC2 instance reboots, you can use the pm2 startup script feature:

```sh
pm2 startup
pm2 save
```

5. Checking the status of your Hardhat node with:

```sh
pm2 status
```

6. Viewing the logs for your Hardhat node with 

```sh
pm2 logs hardhat
```

7. Stopping your Hardhat node with 

```sh
pm2 stop hardhat
```

### Connect to hardhat node on EC2

rpc-url: http://ec2-13-xxx-xxx-135.ap-south-1.compute.amazonaws.com:8545
port: 8545
chainId: 31337
Currency Symbol: ETH

`rpc url is masked to avoid DdoS attacks. Please refer to email`


## Enhancement

- this can be completely dockerized in a docker-compose file and on any new EC2 node we can simply spin up new node via docker
- Lite Geth node docker container can replace the hardhat node
- As Geth node takes a lot of computing resources, hardhat was chosen
