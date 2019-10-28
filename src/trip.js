const readlineSync = require("readline-sync");

const s = Number(readlineSync.question("\nStudents: "));
const t = Number(readlineSync.question("Teachers: "));
const bc = Number(readlineSync.question("Bus capacity: "));

let to = (s + t);
let bn = Math.floor((to/bc) + 1);

console.log("\n" + bn + " bus(es) is (are) needed, with " + (to % bc) + " passenger(s) on the last bus.");
