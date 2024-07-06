function calculateTaxableIncome(grossSalary) {
    const personalRelief = 2400; 
    return grossSalary - personalRelief;
}

function calculatePAYE(taxableIncome) {
  
    let paye = 0;
    if (taxableIncome <= 24000) {
        paye = taxableIncome * 0.1;
    } else if (taxableIncome <= 32333) {
        paye = 2400 + ((taxableIncome - 24000) * 0.25);
    } else {
        paye = 2400 + 2083.25 + ((taxableIncome - 32333) * 0.3);
    }
    return paye;
}
 //  NHIF 
function calculateNHIF(grossSalary) {
   
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary >= 40000) return 1000;
}
  // NSSF 
function calculateNSSF(grossSalary) {
  
    return Math.min(grossSalary * 0.06, 1800); 
}

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const taxableIncome = calculateTaxableIncome(grossSalary);
    const paye = calculatePAYE(taxableIncome);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    const netSalary = grossSalary - paye - nhif - nssf;

    return {
        grossSalary: grossSalary,
        paye: paye,
        nhif: nhif,
        nssf: nssf,
        netSalary: netSalary
    };
}


const basicSalary = 50000;
const benefits = 10000;
const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log(`Gross Salary: ${salaryDetails.grossSalary}`);
console.log(`PAYE: ${salaryDetails.paye}`);
console.log(`NHIF: ${salaryDetails.nhif}`);
console.log(`NSSF: ${salaryDetails.nssf}`);
console.log(`Net Salary: ${salaryDetails.netSalary}`);
