const Web3 = require("web3");
//const sha256 = require("crypto.js/sha256");
const Bip39 =  require ("bip39");
const contractAbi = require("./Web3ClubsToken.json");

const web3 = new Web3(
  "https://eth-goerli.g.alchemy.com/v2/gDOTdgkoZ8xTotM1YSdbgY2cvkomQNEg"
);

// address: '0x307F13b4ECFD1eA5d475EA86a44A20a1C751a68b',
// privateKey: '0x08355810ff86b6c5bfd3346066b307698ab3a34d7c8fb40d6b988b2d03b9108a',

// console.log("connected to node", web3)

// //get balances

// web3.eth.getBalance("0x154561C729c902f3E62Cf9194E6c499975908724", (err, wei) => {
//     balance = web3.utils.fromWei (wei,"ether")
//     console.log("balance",balance)
// })

// Get Balance Wallet - function
// const getWalletBalance = async (_address) => {
//   //check if wallet address is a valid address
//   if (!web3.utils.isAddress(_address)) {
//     throw new Error("invalid Wallet Address");
//   }

//   const balance = await web3.eth.getBalance(_address);
//   return web3.utils.fromWei(balance, "ether");
// };

// getWalletBalance ("0x154561C729c902f3E62Cf9194E6c499975908724"). then(console.log)
// getWalletBalance ("0x90D20e92407C8B675E4AA7e0B0c7C6dC815741C6"). then(console.log)

//create wallet Address

const createWalletAddress = (async) => {
  const Wallet = web3.eth.accounts.create();
  console.log(Wallet);
  return Wallet;
};

//createWalletAddress();

const generatePrivateKey = (async) => {
  const privateKey = web3.utils.randomHex(32);
  console.log(privateKey);
  return privateKey;
};

//generatePrivateKey(); to generate private key

//convert private key to wallet

const privateKeyToWallet = async (_privateKey) => {
  const wallet = web3.eth.accounts.privateKeyToAccount(_privateKey);
  console.log("Private key to wallet", wallet);
  return wallet;
};

// privateKeyToWallet(
//   "0x08355810ff86b6c5bfd3346066b307698ab3a34d7c8fb40d6b988b2d03b9108a"
// );

// Generate Seed Phrase

const generateSeedPhrase = async () => {
  const seedPhrase = Bip39.generateMnemonic()
  console.log("seed phrase yetu:", seedPhrase)
    return seedPhrase;
};

//generateSeedPhrase();

//convert private key to seed phrase

const privatKeyToSeedPhrase = async (_privateKey) => {
  const seedPhrase = Bip39.entropyToMnemonic(_privateKey)

  console.log(seedPhrase)
}
privatKeyToSeedPhrase("08355810ff86b6c5bfd3346066b307698ab3a34d7c8fb40d6b988b2d03b9108a");
//exporting the contracts in another folder
// //
// module.exports = {
//   getWalletBalance,
// };

const web3clubsContract = async () => {
    const contractAddress = "0x9C551B95FD931EFc9F4124Cd36A26DBEAA5502b9";
    const abi

    const contract = new web3.eth.Contract(abi, contractAddress);
    return contract;
}

module.exports = {
      getWalletBalance,
 };
























































// const Web3 = require("web3")
// const sha256 = require("crypto-js/256")

// //address: '0x4B5e325896B357BF37081067daDD438bf5e74B37',
//   //privateKey: '0xbad150a127758a92baca709afaec1e04013a4f825a970c461c2c6a72e59733be


// const web3 = new Web3("https://eth-goerli.g.alchemy.com/v2/sjLi1eBdezbT2V9vLgrhrkRqrvAxTVPv")

// // console.log("connected to node", web3)

// // get balance

// // web3.eth.getBalance("0x25759ba7f443C0637b2479A1De46c3A7F18BBb88", (err, wei)=> {
// //     balance = web3.utils.fromWei (wei, "ether")
// //     console.log("balance", balance)
// // })

// const getWalletBalance = async (_address) => {

//     //check if wallet address is valid
//     if(!web3.utils.isAddress(_address)){
//         throw new Error("Invalid wallet address")
//     }

//     // check if wallet has balance

//     const balance = await web3.eth.getBalance(_address)
//      return web3.utils.fromWei(balance, "ether")
//     };


//     // create wallet address
//     const createWalletAddress = async () =>{
//         const Wallet = web3.eth.accounts.create();

//         console.log(Wallet)

//         return Wallet;
//     }

//     createWalletAddress()

//     // web3.eth.abi
//     //web3.eth.contract
//     //web3.eth.accounts
// // getWalletBalance("").then(console.log)
// // getWalletBalance("").then(console.log)


     
// //exporting the contracts in another folder 
// module.exports = {
//     getWalletBalance
// };