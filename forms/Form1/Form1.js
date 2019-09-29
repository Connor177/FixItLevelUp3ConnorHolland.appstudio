

let n = 2
for (n = 2; n > 0; n++) {


let user = prompt("What calculator do you want to use? (car or home or quit)")


if (user == "car") {

let loanAmountC = prompt("What is the loan amount?")
let loanTimeC = prompt("What is the loan timeframe in months?")
let loanRateC = prompt("What is the loan rate? ex. 5.7% = 5.7")
//enter car loan function
function carLoanPayment(amount, time, rate) {
  let r = rate/100
  let rMonth = r/12
  let d = ((((1 + rMonth) ** time) - 1)/ ((rMonth * (1 + rMonth) ** time)))
  return amount/d 
  }
  
  let monthlyPayment = carLoanPayment(parseFloat(loanAmountC), parseFloat(loanTimeC),parseFloat(loanRateC))
  alert(`A car loan for $${loanAmountC} over ${loanTimeC} months at ${loanRateC}% would have a monthly payment of $${Math.round(monthlyPayment)}.`)


} else if (user == "home"){
let choice = Number(prompt("What mortgage term do you want? (15 or 30)"))
if ((choice == 15) || (choice == 30)) {



  
} else {
  alert("Oops, please choose 15 or 30")
} 
  
} else if (user == "quit") {
  alert("Have a nice day!")
  break;
} else {
  }

}