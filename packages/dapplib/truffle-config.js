require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remember around inflict drink fox two'; 
let testAccounts = [
"0x0d659715b5013891f8afe4eecf04b7115263fbda370f56bb31ba43b8c3dfc7ec",
"0x17bd4d66703ae65445c1c8db38aedb95e5be2752ed7d850baabcc2d0e9a6ee01",
"0xa36442416034a977886926979d6c89c3a0b8252db8e041aab5e6be5411156d18",
"0xf683a8d0cc9a5ead8641edb0d049eb8ad17d05930f59ec597ed410c63ea04879",
"0xe0464ca6ca49be9d43aad8d77b51d6a8452f41bbb1639bc42c668382dbb758d1",
"0xac658267f18b6f810924933a7eeb7e0f1c6954e756a8f1688022a3fedddaeb71",
"0xe276919534c59b61cf7381107927866a770840c05ae0383404dc78c78f11ceab",
"0xd5dd1740c6a14e04aa646fcb5dba3a9134ba9e448802874122bf8f1f609bc166",
"0xdf70184ddeaa5f3c12feb9fc28c31f2872e5cb3c360e3b3b925deabde49403bb",
"0xb3147155e9787d151e5ceff102034692772b948ce93ef6d106498180ddeb5405"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

