const readlineSync = require("readline-sync");

const HW_WEIGHT = 0.15;
const QUIZ_WEIGHT = 0.35;
const TEST_WEIGHT = 0.5;
const ASSIGNMENTS = 3;

let hw1 = Number(readlineSync.question("\nEnter three homework grades.\n"));
let hw2 = Number(readlineSync.question(""));
let hw3 = Number(readlineSync.question(""));

let q1 = Number(readlineSync.question("\nEnter three quiz grades.\n"));
let q2 = Number(readlineSync.question(""));
let q3 = Number(readlineSync.question(""));

let t1 = Number(readlineSync.question("\nEnter three test grades.\n"));
let t2 = Number(readlineSync.question(""));
let t3 = Number(readlineSync.question(""));

let finalHw = ((hw1 + hw2 + hw3) / ASSIGNMENTS) * HW_WEIGHT ;
let finalQ = ((q1+ q2 + q3) / ASSIGNMENTS) * QUIZ_WEIGHT;
let finalT = ((t1 + t2+ t3) / ASSIGNMENTS) * TEST_WEIGHT;

let mpGrade = (finalHw + finalQ + finalT);
mpGrade = Math.round(100*mpGrade)/(100);
finalMpGrade = mpGrade.toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits:2});

console.log("\nYour marking period grade is " + finalMpGrade + "%.\n")
