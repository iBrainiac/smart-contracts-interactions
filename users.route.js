const {getWalletBalance } = require('./index.js')

const userBalance = async () => {
const balance = await getWalletBalance('0x25759ba7f443C0637b2479A1De46c3A7F18BBb88')

console.log(balance)
}

userBalance()