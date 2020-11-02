pragma solidity ^0.5.0;

//import "../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
//import "../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721Mintable.sol";

//
// YOU HAVE TO CHANGE OPENZEPPELIN PACKAGE SOL FILES VERSION. #DONE
// PUT ALL PROPERTIES IN THE ARRAY. #DONE
// FINALIZE TRANSFER, SEND MONEY(GAS).
// // (1) bank to user (money) ok
// // (2) user to user (money) ok
// // (3) user to bank (money) ok
// // (4) user from bank (property) oK
contract Property{
    // Here I declare the Properties contract which holds the properties of the game as a digital asset.
    Bank private instbank;
    constructor() public payable {
    }
    struct Propertybubble {
        uint32 id;
        uint16 buy_price;
        uint16 rent_price;
    }
    mapping (uint32 => address) public propertyToPlayer;
    Propertybubble[] properties;
    function convert (uint256 _a) public pure returns (uint32) {
        return uint32(_a);
    }
    function createProperty(
        uint32 id,
        uint16 _buy_price,
        uint16 _rent_price,
        address BankAddress
    ) external returns(address){
        propertyToPlayer[id] = BankAddress;
        Propertybubble memory property;
        property.id = id;
        property.buy_price = _buy_price;
        property.rent_price = _rent_price;
        properties.push(property);
        
        return propertyToPlayer[id];
    }
    function TransferProperty(address newowner, uint32 index) public{
        //require(msg.sender == propertyToPlayer[index]);
        propertyToPlayer[index] = newowner;
        
    }
    function getPropertyOwner(uint32 index) public view returns(address) {
        return propertyToPlayer[index];
    }
}

contract Bank is Property {
    // Here the "Bank" contract is defined.
    address payable public BankAddress = address(this);
    address payable public BankOwner;
    uint256 public balance = 0;
    mapping (address => uint256) public players;

    constructor () public
    {
        BankOwner = msg.sender;
    }
    function() external payable {
        balance += msg.value;
    }
    function getBankAdd() public view returns(address) {
        return BankOwner;
    }
    function getaddress() external view returns(address){
        return address(this);
    }
    function BankToPlayerProperty(uint32 _propertyId) public payable {
        uint32 id2;
        for ( uint32 i = 0 ; i<28 ; i++ ) {
            if(properties[i].id == _propertyId)
                id2 = i;
        }
        require(msg.value >= properties[id2].buy_price,  "Not enough money");

        if (msg.value >= properties[id2].buy_price) {
            TransferProperty(msg.sender, id2);
            balance += msg.value;
        }
    }
    function BankToPlayerEther(address payable player, uint32 value) public payable {
        require(balance > value, "Bank is Broke");

        if(balance > value)
        {
            player.transfer(value);
            balance -= value;
        }
    }

}
