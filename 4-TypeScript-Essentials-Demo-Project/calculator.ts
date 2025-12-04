// data:
// initial amount
// annual contribution
// expected return
// duration

type InvestmentData = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number;
}

function calulateInvestment(data: InvestmentData) {} // => result[]

function printResults(results) {
    // print (output) the result data
}

const results = calulateInvestment(...)

printResults(results);