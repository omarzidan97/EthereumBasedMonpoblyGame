
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];
var alice = web3.eth.accounts[1];
var bob = web3.eth.accounts[2];


//web3.eth.sendTransaction({from: alice, to: bob, value: web3.toWei(10, 'ether'), gasLimit: 21000, gasPrice: 20000000000})

var Bank = web3.eth.contract([
	{
		"constant": true,
		"inputs": [],
		"name": "BankAddress",
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
				"name": "player",
				"type": "address"
			}
		],
		"name": "BankToPlayerEther",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newowner",
				"type": "address"
			},
			{
				"name": "index",
				"type": "uint32"
			}
		],
		"name": "TransferProperty",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBankAdd",
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
				"name": "",
				"type": "uint32"
			}
		],
		"name": "propertyToPlayer",
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
				"name": "index",
				"type": "uint32"
			}
		],
		"name": "getPropertyOwner",
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
				"name": "_a",
				"type": "uint256"
			}
		],
		"name": "convert",
		"outputs": [
			{
				"name": "",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "balance",
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
		"inputs": [],
		"name": "BankOwner",
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
				"name": "",
				"type": "address"
			}
		],
		"name": "players",
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
				"name": "_propertyId",
				"type": "uint32"
			}
		],
		"name": "BankToPlayerProperty",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint32"
			},
			{
				"name": "_buy_price",
				"type": "uint16"
			},
			{
				"name": "_rent_price",
				"type": "uint16"
			}
		],
		"name": "createProperty",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "initbalance",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	}
]);

var bankcon = Bank.at('0xD17A48621BbAd2C29286b124104410d50F5b8020');
var propcon = Bank.at('0x0569134e964415e32a965023Cee2f68BDdf8F037');

console.log(propcon.createProperty(  0, 1, 20, {from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  1, 1, 20, {from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  2, 1, 20, {from: web3.eth.accounts[0], gas:3000000}));
//propcon._createProperty("Lincoln Tunnel", 0, 60, 90, 0, 0);

//propcon._createProperty("Statue of Liberty", 0, 100, 90, 0, 0);

//propcon._createProperty("Empire State Building", 0, 100, 90, 0, 0);

//propcon._createProperty("Central Park", 0, 120, 90, 0, 0);

    /*_createProperty("98.7 Kiss FM", 0, 140, 90, 0, 0);

    _createProperty("Con Edison Electric", 0, 150, 90, 0, 0);

    _createProperty("Thirteen WNET", 0, 140, 90, 0, 0);

    _createProperty("LOMTO", 0, 200, 90, 0, 0);

    _createProperty("The New York Times", 0, 160, 90, 0, 0);

    _createProperty("New York City Transit", 0, 200, 90, 0, 0);

    _createProperty("New York Rangers", 0, 180, 90, 0, 0);

    _createProperty("New York Knicks", 0, 180, 90, 0, 0);

    _createProperty("Madison Square Garden", 0, 200, 90, 0, 0);

    _createProperty("macy*s", 0, 220, 90, 0, 0);

    _createProperty("FAO Schwarz", 0, 220, 90, 0, 0);

    _createProperty("bloomingdale*s", 0, 240, 90, 0, 0);

    _createProperty("Metro-North Railroad", 0, 200, 90, 0, 0);

    _createProperty("Deloitte & Touche LLP", 0, 260, 90, 0, 0);

    _createProperty("SmithBarney", 0, 260, 90, 0, 0);

    _createProperty("Con Edison Gas", 0, 150, 90, 0, 0);

    _createProperty("CITIBANK", 0, 280, 90, 0, 0);

    _createProperty("The Regency Hotel", 0, 300, 90, 0, 0);

    _createProperty("Essex House", 0, 300, 90, 0, 0);

    _createProperty("The Plaza", 0, 320, 90, 0, 0);

    _createProperty("United Airlines", 0, 200, 90, 0, 0);

    _createProperty("Tiffany & CO.", 0, 350, 90, 0, 0);

    _createProperty("TRUMP TOWER", 0, 400, 90, 0, 0);*/
//console.log(bankcon.BankToPlayerProperty(1, {value: 100000000000000000000, from: bob}));
//bankcon.BankToPlayerProperty(0, {from: web3.eth.accounts[2], value:6000000000000000})
//console.log(propcon.getPropertyOwner(1));
console.log(propcon.BankToPlayerProperty(2, {from: web3.eth.accounts[3], value:20 * 1000000000, gas:3000000}));

console.log(propcon.getPropertyOwner(2));
