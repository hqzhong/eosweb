// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const chain = 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906';
export const environment = {
    production: false,
    appName: 'YASweb',
    network: {
        blockchain: 'YAS',
        host: '45.77.40.115',
        port: 8888,
        protocol: 'http',
        expireInSeconds: 120,
        chainId: chain
    },
    chain: chain,
    Eos: {
        httpEndpoint: 'http://iyas.top:8888',
        chainId: chain,
        verbose: false
    },
    frontConfig: {
       coin: 'YAS',
       bp: 'bp.json',
       tokenContract: 'eosio.token',
       totalBalance: 'YAS',
       convertToUSD: false,
       customBalance: false,
       logo: '/assets/images/eosweb.png',
       name: {
          big: 'yas',
          small: 'web'
       },
       nets: [{ name: 'Mainnet', url: 'https://iyas.top', active: true }],
       disableNets: false,
       voteDonationAcc: 'tothemoonyas',
       disableVoteDonation: false,
       version: '2.2.8',
       producers: 1000,
       social: [
         { link: '', icon: 'fa-github' },
         { link: '', icon: 'fa-facebook' },
         { link: '', icon: 'fa-reddit-alien' },
         { link: 'https://medium.com/europechain', icon: 'fa-medium' },
         { link: 'https://twitter.com/europechain_', icon: 'fa-twitter' },
         { link: 'https://t.me/europechain', icon: 'fa-telegram-plane' }
       ],
       liveTXenable: true
    }
};

