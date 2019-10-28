const readlineSync = require("readline-sync");

const HOURLY_WAGE = Number(readlineSync.question("\nHourly wage: "));

let monHours = Number(readlineSync.question("\nMonday: "));
let tuesHours = Number(readlineSync.question("Tuesday: "));
let wedHours = Number(readlineSync.question("Wednesday: "));
let thursHours = Number(readlineSync.question("Thursday: "));
let friHours = Number(readlineSync.question("Friday: "));
let satHours = Number(readlineSync.question("Saturday: "));
let sunHours = Number(readlineSync.question("Sunday: "));

let monEarnings = monHours * HOURLY_WAGE;
let tuesEarnings = tuesHours * HOURLY_WAGE;
let wedEarnings = wedHours * HOURLY_WAGE;
let thursEarnings = thursHours * HOURLY_WAGE;
let friEarnings = friHours * HOURLY_WAGE;
let satEarnings = satHours * HOURLY_WAGE;
let sunEarnings = sunHours * HOURLY_WAGE;


let salary = monEarnings + tuesEarnings + wedEarnings + thursEarnings + friEarnings + satEarnings + sunEarnings;
totalSalary = salary.toLocaleString("en", { style: "currency", currency: "USD" });

console.log("\nYou'll make " + totalSalary + " this week.");
