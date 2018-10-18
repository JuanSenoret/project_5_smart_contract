const {web3} = require('./web3.js');
const networkConfig = require('../config/network_config.json');
const compiledStarNotary = require('../build/StarNotary.json');

const starNotaryContractInstance = new web3.eth.Contract(
    compiledStarNotary.abi,
    networkConfig.contract_address
);

module.exports = {
  starNotaryContractInstance
}