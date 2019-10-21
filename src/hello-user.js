const readlineSync = require('readline-sync')

const Name = readlineSync.question("\nHi! What's your name?\n")
console.log("\nHello, "+Name+"!\n")
