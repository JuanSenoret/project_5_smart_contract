const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');
const networkConfig = require('../config/network_config.json');

// Create an configure your web3 ethereum provider
const provider = new HDWalletProvider(
  networkConfig.mnemonic,
  'https://rinkeby.infura.io/v3/' + networkConfig.infura_api_key
);
const web3 = new Web3(provider);

module.exports = {
  web3
}