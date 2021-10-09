require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note oval coil grace slice system gate'; 
let testAccounts = [
"0x35c253ab13912fc225d15c8c7a2df61182da4c518ea94dbe82238a3a496a2968",
"0xd3b66d1bb7ba8732427a3c20c174229b78fd3237130de7dfc7b3495bdcd61f63",
"0xf3d0efee9ccffe88393238326c0297e05cea12ebdbed4957c0f9b192a0416fd0",
"0x25d28347359c76fe0d5c2153053bf0cf34889ae04178c70712e568c1017f5c5b",
"0x6f87115d94dcc779c3e61168e59ec9ce1f40b22bf886b6a2cc0073be17b07097",
"0x3bceb936e2df91a9737a4e0668c0cf840c68e1401f48ede6b306f909d920558b",
"0xbf852ffa6d61446532a1c907f9d88c344e01be58dae83c6677f295ed6b10893f",
"0x1d224668f751492a3e0906c9373529890c394c29a5dcf04fda46a9f2dfe6484e",
"0x59824340db31f5665d0d5eac4e76b19013e764b4ab6d083939942529d3431bfa",
"0x0cf7e2d7b2e4b67f4c3c2dadfdb22669438ce9c6385a3c989ec168a18b980d5d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

