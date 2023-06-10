//https://eth-sepolia.g.alchemy.com/v2/tM3cofGNFZFbWPpyDgFucNeZDHdlUW-Y

require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: '0.8.18',
    networks: {
        sepolia:{
            url:'https://eth-sepolia.g.alchemy.com/v2/tM3cofGNFZFbWPpyDgFucNeZDHdlUW-Y',
            accounts:['0803a5f0b9319728862272d27ce91292cceb22212fb1a866fc2519ae9dfb2398']
        }
    }
}