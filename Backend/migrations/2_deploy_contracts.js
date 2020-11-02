//var ERC721Token = artifacts.require('openzeppelin-solidity/contracts/token/ERC721/ERC721Token.sol');
var Property = artifacts.require("Property");
var Bank = artifacts.require("Bank");

module.exports = function(deployer) {
  //deployer.deploy(ERC721Token);

  //deployer.link(Property, ERC721Token);
  deployer.deploy(Property);

  //deployer.link(Property, Bank);
  deployer.deploy(Bank);

  //deployer.link(Property, intialize);
};
