# Supply chain & data auditing

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

### Prerequisites

Ganache should be installed and running.
Truffle v5 should be installed.
Node.js should be installed.

```
Truffle v5.6.7 (core: 5.6.7)
Ganache v7.5.0
Solidity v0.5.16 (solc-js)
Node v16.18.1
Web3.js v1.7.4
```

### Installing

Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project-6
npm install
```

Launch Ganache (either the GUI or CLI) with the following mnemonic: `spirit supply whale amount human item harsh scare congress discover talent hamster`

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Then run the tests (all tests should pass)
```
truffle test
```

Result:

```
Using network 'development'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.
ganache-cli accounts used here... solc-bin. Attempt #1
Contract Owner: accounts[0]  0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
Farmer: accounts[1]  0x018C2daBef4904ECbd7118350A0c54DbeaE3549A
Distributor: accounts[2]  0xCe5144391B4aB80668965F2Cc4f2CC102380Ef0A
Retailer: accounts[3]  0x460c31107DD048e34971E57DA2F99f659Add4f02
Consumer: accounts[4]  0xD37b7B8C62BE2fdDe8dAa9816483AeBDBd356088


  Contract: SupplyChain
    ✔ all roles are added correctly (429ms) Attempt #1
    ✔ Testing smart contract function harvestItem() that allows a farmer to harvest coffee (898ms)
    ✔ Testing smart contract function processItem() that allows a farmer to process coffee (99ms)
    ✔ Testing smart contract function packItem() that allows a farmer to pack coffee (102ms)
    ✔ Testing smart contract function sellItem() that allows a farmer to sell coffee (113ms)
    ✔ Testing smart contract function buyItem() that allows a distributor to buy coffee (143ms)
    ✔ Testing smart contract function shipItem() that allows a distributor to ship coffee (88ms)
    ✔ Testing smart contract function receiveItem() that allows a retailer to mark coffee received (152ms)
    ✔ Testing smart contract function purchaseItem() that allows a consumer to purchase coffee (140ms)
    ✔ Testing smart contract function fetchItemBufferOne() that allows anyone to fetch item details from blockchain
    ✔ Testing smart contract function fetchItemBufferTwo() that allows anyone to fetch item details from blockchain


  11 passing (2s)

```

## Deployed contract

[Contract address](https://sepolia.etherscan.io/address/0xa8963bBBb7AFE0D872BADf4CE9EA937FAf4261d1)

```
Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.
⠇ Fetching solc version list from solc-bin. Attempt #1
⠙ Fetching solc version list from solc-bin. Attempt #1
Migrations dry-run (simulation)
===============================
> Network name:    'sepolia-fork'
> Network id:      11155111
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================
⠙ Fetching solc version list from solc-bin. Attempt #1
   Deploying 'Migrations'
   ----------------------
   > block number:        2398567 solc-bin. Attempt #1
   > block timestamp:     1669973492
   > account:             0x283A03B5A27989536344931eF2831ce55985deaB
   > balance:             0.107248777498219277
   > gas used:            226537 (0x374e9)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00226537 ETH

   -------------------------------------in. Attempt #1
   > Total cost:          0.00226537 ETH


2_deploy_contracts.js
=====================
⠦ Fetching solc version list from solc-bin. Attempt #1
   Deploying 'FarmerRole'
   ----------------------
   > block number:        2398569 solc-bin. Attempt #1
   > block timestamp:     1669973495
   > account:             0x283A03B5A27989536344931eF2831ce55985deaB
   > balance:             0.103763247498219277
   > gas used:            302790 (0x49ec6)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0030279 ETH

⠦ Fetching solc version list from solc-bin. Attempt #1
   Deploying 'DistributorRole'
   ---------------------------
   > block number:        2398570
   > block timestamp:     1669973498
   > account:             0x283A03B5A27989536344931eF2831ce55985deaB
   > balance:             0.100735347498219277
   > gas used:            302790 (0x49ec6)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0030279 ETH

⠙ Fetching solc version list from solc-bin. Attempt #1
   Deploying 'RetailerRole'
   ------------------------
   > block number:        2398571 solc-bin. Attempt #1
   > block timestamp:     1669973501
   > account:             0x283A03B5A27989536344931eF2831ce55985deaB
   > balance:             0.097707207498219277
   > gas used:            302814 (0x49ede)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00302814 ETH

⠋ Fetching solc version list from solc-bin. Attempt #1
   Deploying 'ConsumerRole'
   ------------------------
   > block number:        2398572
   > block timestamp:     1669973504
   > account:             0x283A03B5A27989536344931eF2831ce55985deaB
   > balance:             0.094679307498219277
   > gas used:            302790 (0x49ec6)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0030279 ETH

⠏ Fetching solc version list from solc-bin. Attempt #1
   Deploying 'SupplyChain'
   -----------------------
   > block number:        2398573
   > block timestamp:     1669973511
   > account:             0x283A03B5A27989536344931eF2831ce55985deaB
   > balance:             0.061455367498219277
   > gas used:            3322394 (0x32b21a)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03322394 ETH

   -------------------------------------in. Attempt #1
   > Total cost:          0.04533578 ETH

Summary
=======
> Total deployments:   6
> Final cost:          0.04760115 ETH


⠙ Fetching solc version list from solc-bin. Attempt #1
⠋ Fetching solc version list from solc-bin. Attempt #1
Starting migrations...
======================
> Network name:    'sepolia'
> Network id:      11155111
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================
⠴ Fetching solc version list from solc-bin. Attempt #1
   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xd27631a0a2d6598e3bb659a91be8e795e16c0543f6a5ef48e0ef128e1fe6f671
   > Blocks: 3            Seconds: 25c-bin. Attempt #1
   > contract address:    0xF2927843b5AEDAA6D02eE6e7fA71d11d8d0FF9A6
   > block number:        2398575
   > block timestamp:     1669973544
   > account:             0x283A03B5A27989536344931eF2831ce55985deaB
   > balance:             0.107248777498219277
   > gas used:            226537 (0x374e9)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00226537 ETH

   > Saving migration to chain.om solc-bin. Attempt #1
   > Saving artifacts to chain.
   -------------------------------------
   > Total cost:          0.00226537 ETH

⠏ Fetching solc version list from solc-bin. Attempt #1
2_deploy_contracts.js
=====================
⠦ Fetching solc version list from solc-bin. Attempt #1
   Deploying 'FarmerRole'
   ----------------------
   > transaction hash:    0xfafca819bb4fab6ac060ff7416bc61e6cc12a92388bede73ab74647c5e355fb1
   > Blocks: 2            Seconds: 17c-bin. Attempt #1
   > contract address:    0x24e2F9Ad79B20E9bAF7FC910AfD2FE31C5d39a50
   > block number:        2398578
   > block timestamp:     1669973580
   > account:             0x283A03B5A27989536344931eF2831ce55985deaB
   > balance:             0.103763247498219277
   > gas used:            302790 (0x49ec6)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0030279 ETH

⠸ Fetching solc version list from solc-bin. Attempt #1
   Deploying 'DistributorRole'
   ---------------------------
   > transaction hash:    0xa2c19cba4c5fb911ecef54b1ca4bdac983952b4ea6a9f180141969fb9776f529
   > Blocks: 2            Seconds: 17c-bin. Attempt #1
   > contract address:    0xd1dd6Ec806f98aD8edf1D67069D6dA01592397dE
   > block number:        2398580
   > block timestamp:     1669973604
   > account:             0x283A03B5A27989536344931eF2831ce55985deaB
   > balance:             0.100735347498219277
   > gas used:            302790 (0x49ec6)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0030279 ETH

⠦ Fetching solc version list from solc-bin. Attempt #1
   Deploying 'RetailerRole'
   ------------------------
   > transaction hash:    0x1eef7741d2f65f1a104a57d925a87a6b89977f40219f824e0b205d9c490bf74d
   > Blocks: 2            Seconds: 18c-bin. Attempt #1
   > contract address:    0x28922B8618252B495444E03F71230b7a8113b1b3
   > block number:        2398582
   > block timestamp:     1669973628
   > account:             0x283A03B5A27989536344931eF2831ce55985deaB
   > balance:             0.097707207498219277
   > gas used:            302814 (0x49ede)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00302814 ETH

⠙ Fetching solc version list from solc-bin. Attempt #1
   Deploying 'ConsumerRole'
   ------------------------
   > transaction hash:    0x1063aa05313a8dd9fa74abb5545bfd3044f29a38beffdb0d3300757375310e66
   > Blocks: 2            Seconds: 17c-bin. Attempt #1
   > contract address:    0x44541Dd2cB67D18D65E1Ac156CA1dB6850a42AD9
   > block number:        2398584
   > block timestamp:     1669973652
   > account:             0x283A03B5A27989536344931eF2831ce55985deaB
   > balance:             0.094679307498219277
   > gas used:            302790 (0x49ec6)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0030279 ETH

⠇ Fetching solc version list from solc-bin. Attempt #1
   Deploying 'SupplyChain'
   -----------------------
   > transaction hash:    0x01f7eb28e51449cfc894305e383efc54cb69761cedd4926929fd15c5862e30d7
   > Blocks: 1            Seconds: 17c-bin. Attempt #1
   > contract address:    0xa8963bBBb7AFE0D872BADf4CE9EA937FAf4261d1
   > block number:        2398585
   > block timestamp:     1669973676
   > account:             0x283A03B5A27989536344931eF2831ce55985deaB
   > balance:             0.061455367498219277
   > gas used:            3322394 (0x32b21a)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03322394 ETH

   > Saving migration to chain.om solc-bin. Attempt #1
   > Saving artifacts to chain.
   -------------------------------------
   > Total cost:          0.04533578 ETH

Summary
=======
> Total deployments:   6
> Final cost:          0.04760115 ETH
```