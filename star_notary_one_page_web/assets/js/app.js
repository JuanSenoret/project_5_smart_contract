let starNotary;
const loadPage = () => {
    let isMetamask = false;
    if(typeof web3 != 'undefined') { 
        web3 = new Web3(web3.currentProvider); // what Metamask injected
        console.log('Metamask injected');
        isMetamask = true;
    } else {
        // Instantiate and set Ganache as your provider
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        console.log('Ganache injected');
    }
    
    // The default (top) wallet account from a list of test accounts 
    web3.eth.defaultAccount = web3.eth.accounts[0];
    
    // The interface definition for your smart contract (the ABI) 
    const StarNotary = web3.eth.contract(
        [
            {
              "constant": true,
              "inputs": [
                {
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "name": "",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "starsForSale",
              "outputs": [
                {
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "to",
                  "type": "address"
                },
                {
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "tokenIdToStarInfo",
              "outputs": [
                {
                  "name": "racCoordinator",
                  "type": "string"
                },
                {
                  "name": "decCoordinator",
                  "type": "string"
                },
                {
                  "name": "magCoordinator",
                  "type": "string"
                },
                {
                  "name": "storyDescription",
                  "type": "string"
                },
                {
                  "name": "assigned",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "from",
                  "type": "address"
                },
                {
                  "name": "to",
                  "type": "address"
                },
                {
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "from",
                  "type": "address"
                },
                {
                  "name": "to",
                  "type": "address"
                },
                {
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "name": "owner",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "to",
                  "type": "address"
                },
                {
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "from",
                  "type": "address"
                },
                {
                  "name": "to",
                  "type": "address"
                },
                {
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "name": "_data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "name": "owner",
                  "type": "address"
                },
                {
                  "name": "operator",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "name": "",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "name": "owner",
                  "type": "address"
                }
              ],
              "name": "starCreated",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "name": "approved",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "_ra",
                  "type": "string"
                },
                {
                  "name": "_dec",
                  "type": "string"
                },
                {
                  "name": "_mag",
                  "type": "string"
                },
                {
                  "name": "_story",
                  "type": "string"
                },
                {
                  "name": "_tokenId",
                  "type": "uint256"
                }
              ],
              "name": "createStar",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "_tokenId",
                  "type": "uint256"
                },
                {
                  "name": "_price",
                  "type": "uint256"
                }
              ],
              "name": "putStarUpForSale",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "_tokenId",
                  "type": "uint256"
                }
              ],
              "name": "buyStar",
              "outputs": [],
              "payable": true,
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "name": "_ra",
                  "type": "string"
                },
                {
                  "name": "_dec",
                  "type": "string"
                },
                {
                  "name": "_mag",
                  "type": "string"
                }
              ],
              "name": "checkIfStarExist",
              "outputs": [
                {
                  "name": "",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "name": "_ra",
                  "type": "string"
                },
                {
                  "name": "_dec",
                  "type": "string"
                },
                {
                  "name": "_mag",
                  "type": "string"
                }
              ],
              "name": "append",
              "outputs": [
                {
                  "name": "",
                  "type": "string"
                }
              ],
              "payable": false,
              "stateMutability": "pure",
              "type": "function"
            }
          ]
    );
    // Grab the contract at specified deployed address with the interface defined by the ABI
    if(isMetamask) {
        // Rinkeby
        starNotary = StarNotary.at('0xc5f0a4f9c71a5eb42ef16de37d56c80c4ef4ade3');
    } else {
        // Ganache
        starNotary = StarNotary.at('0xf4f1ca31afa46bd7b263ad832c539ad6142865c1');
    }
};

const claimButtonClicked = () => { 
    web3.eth.getAccounts(function(error, accounts) { 
        if (error) { 
            console.log(error);
            return;
        }
        var account = accounts[0];
        createstar(account);
    });
};

const searchButtonClicked = () => { 
    searchStar();
};

const createstar = (account) => {
    const ra = document.getElementById('star-ra').value;
    const dec = document.getElementById('star-dec').value;
    const mag = document.getElementById('star-mag').value;
    const story = document.getElementById('star-story').value;
    if(ra.length && dec.length && mag.length) {
        // Hide the alert in case open
        $('#star-coordinators-error').hide();
        $('#star-register-error').hide();
        $('#transaction-loader').hide();
        // Create the tokenId based on the star coordinators hash
        const hashStarTokenId = new BigNumber(web3.sha3(ra + dec + mag), 16).toNumber();
        starNotary.createStar(ra, dec, mag, story, hashStarTokenId, function (error, result) {
            $('#transaction-loader').show();
            $('#transaction-loader').fadeIn();
            $('#transaction-loader').slideDown();
            if (!error) {
                const starCreatedEvent = starNotary.starCreated({from: account});
                starCreatedEvent.watch(function(error, result) {
                    if (!error) {
                        $('#transaction-loader').hide();
                        $('#star-coordinators-success').show();
                        $('#star-coordinators-success').fadeIn();
                        $('#star-coordinators-success').slideDown();
                    } else {
                        $('#transaction-loader').hide();
                        $('#star-register-error').show();
                        $('#star-register-error').fadeIn();
                        $('#star-register-error').slideDown();
                        console.log('watching for star claimed event is failing');
                    }
                });
            } else {
                $('#transaction-loader').hide();
                $('#star-register-error').show();
                $('#star-register-error').fadeIn();
                $('#star-register-error').slideDown();
                console.log(error);
            }
        });
    } else {
        $('#star-register-error').hide();
        $('#transaction-loader').hide();
        $('#star-coordinators-error').show();
        $('#star-coordinators-error').fadeIn();
        $('#star-coordinators-error').slideDown();
        console.log("Error: star coordinators empty");
    }
};

const searchStar = () => {
    const ra = document.getElementById('search-star-ra').value;
    const dec = document.getElementById('search-star-dec').value;
    const mag = document.getElementById('search-star-mag').value;

    if(ra.length && dec.length && mag.length) {
        // Hide the alert in case open
        $('#star-search-not-found').hide();
        $('#star-search-empty-fields').hide();
        $('#star-searc-error').hide();
        // Create the tokenId based on the star coordinators hash
        const hashStarTokenId = new BigNumber(web3.sha3(ra + dec + mag), 16).toNumber();
        // Get and display star name
        starNotary.tokenIdToStarInfo(hashStarTokenId, function (error, result) {
            if (!error) {
                document.getElementById('tokenId').innerText = hashStarTokenId;
                document.getElementById('result-ra').innerText = result[0];
                document.getElementById('result-dec').innerText = result[1];
                document.getElementById('result-mag').innerText = result[2];
                document.getElementById('result-story').innerText = result[3];
                $('#search-table').show();
                $('#search-table').fadeIn();
                $('#search-table').slideDown();
            } else { 
                console.log(error);
                $('#star-search-not-found').show();
                $('#star-search-not-found').fadeIn();
                $('#star-search-not-found').slideDown();
            }
        });
        // Get and display star owner
        starNotary.ownerOf(hashStarTokenId, function (error, result) {
            if (!error) {
                document.getElementById('result-owner').innerText = result;
            } else { 
                console.log(error);
                $('#star-search-not-found').show();
                $('#star-search-not-found').fadeIn();
                $('#star-search-not-found').slideDown();
            }
        });
    } else {
        $('#star-searc-error').hide();
        $('#star-search-not-found').hide();
        $('#star-search-empty-fields').show();
        $('#star-search-empty-fields').fadeIn();
        $('#star-search-empty-fields').slideDown();
    }
};