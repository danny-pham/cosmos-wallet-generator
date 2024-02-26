const cosmosWalletGenerator = require('cosmos-wallet-generator');

cosmosWalletGenerator.createCosmosWalletFromSeedPhrase(24, 3)
    .then(wallets => {
        console.log('Cosmos Wallets:');
        wallets.forEach(wallet => console.log('Seed Phrase:', wallet.seedPhrase, 'Address:', wallet.address));
    })
    .catch(error => console.error('Error creating Cosmos wallets:', error));
