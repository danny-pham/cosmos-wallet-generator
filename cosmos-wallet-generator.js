const { DirectSecp256k1HdWallet, SigningStargateClient } = require('@cosmjs/stargate');
const { Tendermint34Client } = require('@cosmjs/tendermint-rpc');
const seedPhraseGenerator = require('seed-phrase-generator');

async function createCosmosWalletFromSeedPhrase(seedPhraseLength = 12, numberOfSeedPhrases = 1) {
    const seedPhrases = [];
    for (let i = 0; i < numberOfSeedPhrases; i++) {
        const seedPhrase = seedPhraseGenerator.generateSeedPhrase(seedPhraseLength);
        const hdPath = "m/44'/118'/0'/0/0"; // Standard BIP44 HD path for Cosmos
        const wallet = await DirectSecp256k1HdWallet.fromMnemonic(seedPhrase, { hdPaths: [hdPath] });
        const [{ address }] = await wallet.getAccounts();
        seedPhrases.push({ seedPhrase, address });
    }
    return seedPhrases;
}

module.exports = {
    createCosmosWalletFromSeedPhrase: createCosmosWalletFromSeedPhrase
};
