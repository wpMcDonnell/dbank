const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
// Infura Key used for Ethereum
const infuraKey = fs.readFileSync(".secret").toString().trim();
// Alchemy Key used for mumbai
const alchemyKey = fs.readFileSync(".secretTwo").toString().trim();
const mnemonic = fs.readFileSync(".env").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        // Rinkeby id
        network_id: 4,
        gas: 8500000,
        from: "0x83ca0B46a5D5CeD7420285d1252d3348649bF5fC",
        confirmations: 2,    // # of confs to wait between deployments. (default: 0)
        timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
        skipDryRun: true
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
        // Ropsten's id
        network_id: 3,
        from: "0x83ca0B46a5D5CeD7420285d1252d3348649bF5fC",       
        gas: 466000,        // Ropsten has a lower block limit than mainnet
        confirmations: 2,    // # of confs to wait between deployments. (default: 0)
        timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
        skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
      },
    // Polygon Testnet
    mumbai: {
      provider: () => new HDWalletProvider(mnemonic, `https://polygon-mumbai.g.alchemy.com/v2/${alchemyKey}`),
        // Mumbai id
        network_id: 80001,
        confirmations: 2,
        timeoutBlocks: 200,
        skipDryRun: true   // Skip dry run before migrations? (default: false for public nets )
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: ">=0.6.0 <0.8.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}