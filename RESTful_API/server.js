const Hapi = require('hapi');
const {web3} = require('./components/web3.js');
const {starNotaryContractInstance} = require('./components/star_notary.js');

// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8000
});

// Fetch star blocks for address
server.route({
    method:'GET',
    path:'/star/{starTokenId}',
    handler:async function(request,h) {
        const tokenId = encodeURIComponent(request.params.starTokenId);
        const accounts = await web3.eth.getAccounts();
        let response;
        console.log('Attempting to connect to Rinkeby test network from account', accounts[0]);
        if(tokenId) {
            try{
                const starDataResponse = await starNotaryContractInstance.methods.tokenIdToStarInfo(tokenId).call()
                .then((receipt) => {
                    response = h.response(['Star power ' + tokenId + '!', receipt[3], receipt[0], receipt[1], receipt[2]]);
                    response.code(200);
                }).
                catch((error) => {
                    console.log(error);
                    response = h.response({"error": err});
                    response.code(500);
                });
            } catch(err) {
                console.log(err);
                response = h.response({"error": err});
                response.code(500);
            }
        } else {
            response = h.response({"error": "No tokenID"});
            response.code(500);
        }
        
        response.header('Content-Type', 'application/json; charset=utf-8');
        return response;
    }
});

// Start the server
async function start() {
    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('Server running at:', server.info.uri);
};

// Start the service
start();