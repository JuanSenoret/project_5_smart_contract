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
- Install the dependencies (openzeppelin-solidity, truffle-hdwallet-provider)
```
npm install
```
- Go to the following project folder
```
cd <project name>/RESTful_API
```
- Install the dependencies (hapi, web3, truffle-hdwallet-provider)
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

## Optional: Configure RESTful API endpoint to return a registered star

We will create an RESTful API to interact with the Star Notary smart contract

- Open in a terminal the RESTful_API folder
```
cd <project name>/RESTful_API
```
- Use the template in the config/network_config.example.json to create add your Infura API KEY, mnemonic and contract address and rename to network_config.json
- If you want to use ma Star Notary contract address use 0xc5f0a4f9c71a5eb42ef16de37d56c80c4ef4ade3 in the key "contract_address"
- Start the service
```
npm start
```

* **URL**

  http://localhost:8000/star/[starTokenId]

* **Method:**

    `GET`
  
*  **URL Params**

   **Required:**
 
    `starTokenId=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[
    "Star power 1!",
    "Star owner is Udacity Blockchain Nanodegree",
    "ra_032.155",
    "dec_121.874",
    "mag_245.978"
]`

* **Error Response:**

  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{"error": "Error trying to conect to Rinkeby network"}`

* **Sample Call:**

  ```
  curl "http://localhost:8000/star/1"
  ```