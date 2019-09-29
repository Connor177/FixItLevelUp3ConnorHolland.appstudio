

let n = 2
for (n = 2; n > 0; n++) {


let user = prompt("What calculator do you want to use? (car or home or quit)")


if (user == "car") {




} else if (user == "home"){
let choice = Number(prompt("What mortgage term do you want? (15 or 30)"))
if ((choice == 15) || (choice == 30)) {

let loanAmountH = prompt("What is the loan amount?")
let loanTimeH = choice
let loanRateH = prompt("What is the loan rate? ex. 5.7% = 5.7")
//enter home loan function
 //home loan
 function homeLoanPayment(amount, time, rate) {
  let r = rate/100
  let rMonth = r/12
  let t = time*12
  let d = ((((1 + rMonth) ** t) - 1)/ ((rMonth * (1 + rMonth) ** t)))
  return amount/d 
  }

let monthlyPayment = homeLoanPayment(parseFloat(loanAmountH), parseFloat(loanTimeH), parseFloat(loanRateH))
alert(`A home loan for $${loanAmountH} over ${loanTimeH} years at ${loanRateH}% would have a monthly payment of $${monthlyPayment.toFixed(2)}.`)

  
} else {
  alert("Oops, please choose 15 or 30")
} 
  
} else if (user == "quit") {
  alert("Have a nice day!")
  break;
} else {
  }

}