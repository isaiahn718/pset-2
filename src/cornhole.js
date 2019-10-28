const readlineSync = require("readline-sync");

const l = Number(48);
const w = Number(24);
const d = Number(6);
const r = d / 2;
const ca = (r * r * Math.PI);
const bs = (l * w);

const fb = (bs - ca).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nThe surface area of a standard Cornhole board is " + fb + " square inch(es).")
