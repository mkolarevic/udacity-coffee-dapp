const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "60d3dffa0e5546e0981f6161d0f163fa";

const fs = require('fs');
const mnemonic = "apart fade this catch illness eagle melt panther trap split spot opera";

module.exports = {


  networks: {

    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"       // Match any network
    },

    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, `https://sepolia.infura.io/v3/${infuraKey}`),
        network_id: 11155111,       // sepolia's id
        gas: 4500000,
        gasPrice: 10000000000
    },
  },

  compilers: {
    solc: {
      version: "^0.5.0",
    }
  }
}