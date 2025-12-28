let historyDisplay = document.getElementById("history-value");
let outputDisplay = document.getElementById("output-value");

let firstNumber = "";
let operator = "";
let secondNumber = "";
 
let numberButtons = document.getElementsByClassName("number");

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', function() {
        secondNumber = secondNumber + this.innerText;
        outputDisplay.innerText = secondNumber;
    
    });
    
}
let operatorButtons = document.getElementsByClassName("operator");
for (let i = 0; i < opperatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', function() {
      if (this.id ==="clear") {
          firstNumber = "";
          secondNumber = "";
          operator = "";
          outputDisplay.innerText = "";
          historyDisplay.innerText = "";
      }
        else if (this.id ==="backspace") {
            secondNumber = secondNumber.slice(0, -1);
            outputDisplay.innerText = secondNumber;
        }
        else if (this.id ==="="){
            let result = 0;
            
            let num1 = Number(firstNumber);
            let num2 = Number(secondNumber);
            if (operator === "+") {
                result = num1 + num2;
            } else if (operator === "-") {
                result = num1 - num2;
            } else if (operator === "*") {
                result = num1 * num2;
            } else if (operator === "/") {
                result = num1 / num2;
            }
            outputDisplay.innerText = result;
            historyDisplay.innerText = "";
            
            firstNumber = "";
            secondNumber = result.toString();
            operator = "";
        }
        else {
            if (secondNumber !== "") {
               firstNumber = secondNumber;
                operator = this.id; //←fix here
                historyDisplay.innerText = firstNumber + " " + this.innerText;
                secondNumber = "";
                outputDisplay.innerText = "";
            }
        }
    });
}