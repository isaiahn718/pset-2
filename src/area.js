const readlineSync = require("readline-sync");

const Width = readlineSync.question("Width: ");
const Length = readlineSync.question("Length: ");
let w= Width;
let l= Length;
let d= Math.sqrt((w*w + l*l))

d= d.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nA(n) " + w + "-by-" + l + "-inch sheet of paper has an diagonal of " + d + " square inch(s).");
