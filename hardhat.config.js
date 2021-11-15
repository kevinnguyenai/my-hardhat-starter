require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const { ALCHEMY_API_URL, MNEMONIC_PHRASE, INFURA_APP_URL, PRIVATE_KEY } = process.env;
const HDWalletProvider = require("@truffle/hdwallet-provider");


module.exports = {
    defaultNetwork: "hardhat",
    solidity: {
        version: "0.8.4",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    networks: {
        hardhat: {},
        ropsten_alchemy: {
            url: `${ALCHEMY_API_URL}`,
            accounts: [`0x${PRIVATE_KEY}`]
        },
        ropsten_infura: {
            url: `${INFURA_APP_URL}`,
            accounts: [`0x${PRIVATE_KEY}`]
        },
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts"
    },
    mocha: {
        timeout: 20000
    }
};