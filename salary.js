//declaring the different variables
let personalRelief = 2400;
let NHIF;
let NSSF = 400;
const prompt = require("prompt-sync")();//declaring the prompt input

function calculateTax(){
    let Paye = 0;
    let gross = prompt("Enter gross amount ")//prompts the user to input the gross salary
    let taxableIncome = gross - (calculateNHIF(gross) + NSSF + personalRelief)
    if(taxableIncome > 0 && taxableIncome <= 24000){//assigns the different ranges using the if statement
        Paye = taxableIncome*0.1;
    } else if (taxableIncome >= 24001 && taxableIncome <= 32333) {
        Paye = 24000 * 0.1 + (taxableIncome - 24000) * 0.25 ;//if the salary is more than 24000, it first calculates the tax for the 24000 then takes the remainder and calculates it using the second tax rate
    } else {
        Paye = 24000 * 0.1 + (taxableIncome - 24000) * 0.25 + (taxableIncome - 8333) * 0.3;//if the salary is more than 32333, it first calculates the tax for the 24000 then takes the remainder and calculates it using the second tax rate, then takes the remainder and calculates using the third tax rate
    }
    let netSalary = (taxableIncome - Paye);//declaring the netSalary
    return netSalary;//should return the netSalary after computing the values of taxableIncome and payee
}
const calculateNHIF = function (gross){//declaring a function calculateNHIF
    if (gross > 0 && gross <= 5999) {//using if statements to assign the different ranges
        NHIF = 150 * 0.85;
        return NHIF
    } else if (gross >= 6000 && gross <= 7999) {//if the first if statement is false it goes to next else if statement and executes it and if it also fails it executes each range until it finds the range in which it is supposed to be
        NHIF = 300 * 0.85;
        return NHIF
    } else if (gross >= 8000 && gross <= 11999) {
        NHIF = 400 * 0.85;
        return NHIF
    } else if (gross >= 12000 && gross <= 14999) {
        NHIF = 500 * 0.85;
        return NHIF
    } else if (gross >= 15000 && gross <= 19999) {
        NHIF = 600 * 0.85;
        return NHIF
    } else if (gross >= 20000 && gross <= 24999) {
        NHIF = 750 * 0.85;
        return NHIF
    } else if (gross >= 25000 && gross <= 29999) {
        NHIF = 850 * 0.85;
        return NHIF
    } else if (gross >= 30000 && gross <= 34999) {
        NHIF = 900 * 0.85;
        return NHIF
    } else if (gross >= 35000 && gross <= 39999) {
        NHIF = 950 * 0.85;
        return NHIF
    } else if (gross >= 40000 && gross <= 44999) {
        NHIF = 1000 * 0.85;
        return NHIF;
    } else if (gross >= 45000 && gross <= 49999) {
        NHIF = 1100 * 0.85;
        return NHIF;
    } else if (gross >= 50000 && gross <= 59999) {
        NHIF = 1200 * 0.85;
        return NHIF;
    } else if (gross >= 60000 && gross <= 69999) {
        NHIF = 1300 * 0.85;
        return NHIF;
    } else if (gross >= 70000 && gross <= 79999) {
        NHIF = 1400 * 0.85;
        return NHIF;
    } else if (gross >= 80000 && gross <= 89999) {
        NHIF = 1500 * 0.85;
        return NHIF;
    } else if (gross >= 90000 && gross <= 99999) {
        NHIF = 1600 * 0.85;
        return NHIF;
    } else {
        NHIF = 1700 * 0.85;//for all the values above 100000, the NHIF value remains const ... that is 1700 * 0.85
        return NHIF;
    }
}
console.log(calculateTax());//callback function

// // NSSF = 400;

// calculateNHIF(mySal)
// // calculateTax(mySal)
// // calculateNSSF(mySal)

// // console.log(Paye);
// console.log(NHIF);
// console.log(NSSF);
