const readlineSync = require("readline-sync");

const PRE_TAX = 0.07
const FEDERAL_INCOME_TAX = 0.157
const STATE_INCOME_TAX = 0.0447
const SOCIAL_SECURITY_TAX = 0.062
const MEDICARE_TAX = 0.0145

const ANNUAL_SALARY = parseFloat(readlineSync.question("\nAnnual salary: "));
const ANNUAL_SALARY_CHECK = ANNUAL_SALARY/24

const TOTAL_TAXES = FEDERAL_INCOME_TAX+STATE_INCOME_TAX+SOCIAL_SECURITY_TAX+MEDICARE_TAX

const ANNUAL_SALARY_PRETAX = ANNUAL_SALARY_CHECK - (PRE_TAX*ANNUAL_SALARY_CHECK)
const ANNUAL_SALARY_TAX = ANNUAL_SALARY_PRETAX - (TOTAL_TAXES*ANNUAL_SALARY_PRETAX)

const DECIMALS= ANNUAL_SALARY_TAX.toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits:2});


console.log("\nYour take-home pay each check will be $" + DECIMALS + ".")
