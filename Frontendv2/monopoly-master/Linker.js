
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];
//var alice = web3.eth.accounts[1];
//var bob = web3.eth.accounts[2];


var Bank = web3.eth.contract([
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
			},
			{
				"name": "BankAddress",
				"type": "address"
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
		"constant": true,
		"inputs": [],
		"name": "getaddress",
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
				"name": "player",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint32"
			}
		],
		"name": "BankToPlayerEther",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
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

web3.eth.sendTransaction({to: bankcon.getaddress(), value: web3.toWei(1500, 'ether'), gasLimit: 3000000, gasPrice: 20000000000})

//console.log(propcon.createProperty(  0, 1, 20, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));

console.log(propcon.createProperty(  1, 60, 10, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  3, 60, 20, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  5, 200, 10, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  6, 100, 30, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  8, 100, 30, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  9, 120, 40, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  11, 140, 50, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  12, 150, 40, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  13, 140, 50, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  14, 160, 60, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  15, 200, 10, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  16, 180, 70, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  18, 180, 70, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  19, 200, 80, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  21, 220, 90, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  23, 220, 90, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  24, 240, 100, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  25, 200, 10, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  26, 260, 110, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  27, 260, 110, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  28, 150, 10, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  29, 280, 120, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  31, 300, 130, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  32, 300, 130, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  34, 320, 150, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  35, 200, 20, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  37, 350, 175, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));
console.log(propcon.createProperty(  39, 400, 200, bankcon.getaddress() ,{from: web3.eth.accounts[0], gas:3000000}));

//console.log(propcon.BankToPlayerProperty(2, {from: web3.eth.accounts[3], value:20 * 1000000000, gas:3000000}));

//console.log(propcon.getPropertyOwner(2));
