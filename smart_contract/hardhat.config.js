require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/rVKDTWREAy1EnqaF_dPxnCb_nU88d7u0',
      accounts: ['b327d2c3a5ada7c0a611821b83daf1cf5ad1855dbb4953c4e009fd699f753484']
    }
  }
}