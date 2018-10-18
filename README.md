# project_5_smart_contract

For this project, we’ll build a Dapp Star notary service. We will create our smart contract to register star coordinators under our addresses, a web page to interact with the smart contract and finally we will create a REST API to interact with the smart contract from the backend part.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Installing Node and NPM is pretty straightforward using the installer package available from the (Node.js® web site)[https://nodejs.org/en/].

### Configuring your project

- Install ganache (graphical interface) and ganache-cli in your local environment
Donwload the installer from [https://truffleframework.com/ganache]
```
npm install -g ganache-cli
```
- Install truffle in your local environment
```
npm install -g truffle
```
- Install truffle-hdwallet-provider in your local environment
```
npm install -g truffle-hdwallet-provider
```
- Install http-server in your local environment. Light server container to serve your web page
```
npm install -g http-server
```
- Clone the repository in your local environment
```
git clone <url GitHuib Repo>
```
- Go to the project folder
```
cd <project name>/smart_contracts
```
- Install the dependencies (openzeppelin-solidity)
```
npm install
```
- Install the metamask plugin in your chrome browser

## Test smart contract code coverage

For each of the functions that we implemented in Part 1 of the course 5, we will create specific test. In this section we will perfome the test.

- Go to the terminal and start ganache-cli
```
ganache-cli
```
- In another terminal we will open the smart_contracts folder
```
cd <project name>/smart_contracts
```
- Let`s execute the test with the following command
```
truffle test test/StarNotaryTest.js
```

## Deploy smart contract on a public test network

To deploy the smart contract locally in your ganache local network or in some public network you have to create a truffle.js
- Use the template in the truffle-example.js file to crete your truffle.js configuration file
- You have to change the mnemonic of your ethereum wallet account and the API KEY of your infura project

### Deploy in local ganache network
- Go to the terminal and start ganache-cli
```
ganache-cli
```
- In another terminal we will open the smart_contracts folder
```
cd <project name>/smart_contracts
```
- To deploy
```
truffle migrate --network development
```
- Or
```
truffle deploy --network development
```

### Deploy in ethereum public network like Rinkeby
- Open in a terminal the smart_contracts folder
```
cd <project name>/smart_contracts
```
- To deploy
```
truffle migrate --network rinkeby
```
- Or
```
truffle deploy --network rinkeby
```

### My StarNotary contract deployed in Rinkeby test network

To check my result please open the project_submission.md file and check the transaction hash in etherscan tool

## Modify client code to interact with smart contract

In this section you could interact with the previous deployed StarNotary smart contract in public Rinkeby test network using a web application.

- Open in a terminal the star_notary_one_page_web folder
```
cd <project name>/star_notary_one_page_web
```
- To star the web service
```
http-server
```
- Open in your chrome browser (with metamask plugin already logged-in) the following url
```
http://127.0.0.1:8080
```
- Under Create Star service you can create a star using the Ra-Dec-Mag coordinators
- Under Search Star service you can search for a specific star using the Ra-Dec-Mag coordinators