let isNewCalculation = true;
let firstNumber = 0;
let secondNumber = 0;
let result = 0;
let operation = "";
const currInput = document.getElementById("box");

function appendText(text) {
  if (isNewCalculation) {
    currInput.value = "";
    isNewCalculation = false;
  }
  let currentText = currInput.value;
  if (currentText.length < 12) {
    if (text === "," && !currentText.includes(".")) {
      currInput.value += ".";
    } else if (text !== ",") {
        if(currentText === "0"){
            currInput.value = text;
        }
        else{
            currInput.value += text;
        }
    }
  }
  secondNumber = parseFloat(currInput.value);
}

function addOperation(operator) {
  firstNumber = parseFloat(currInput.value);
  operation = operator.className;
  currInput.value = "";
}

function calculateResult() {
  if (
    operation.length > 0 &&
    (currInput.value != "" ||
      operation === "sqRoot" ||
      operation === "factorial")
  ) {
    switch (operation) {
      case "divide":
        result = firstNumber / secondNumber;
        break;
      case "multiply":
        result = firstNumber * secondNumber;
        break;
      case "subtract":
        result = firstNumber - secondNumber;
        break;
      case "addition":
        result = firstNumber + secondNumber;
        break;
      case "modulus":
        result = firstNumber % secondNumber;
        break;
      case "sqRoot":
        result = Math.sqrt(firstNumber);
        break;
      case "factorial":
        result = factorial(firstNumber);
        break;
      case "power":
        result = firstNumber ** secondNumber;
        break;
    }

    addToHistory();

    firstNumber = 0;
    secondNumber = 0;
    operation = "";
    isNewCalculation = true;
    currInput.value = result.toString();
  }
  else{
    currInput.value = "Invalid input"
    
  }
}

function factorial(num) {
  if (num == 1) return num;
  else return num * factorial(num - 1);
}

function addToHistory() {
  const newCalulcation = document.createElement("p");
  newCalulcation.innerHTML = historyText();

  const target = document.querySelector(".previousCalulations");
  target.appendChild(newCalulcation);

  const history = document.getElementById("history");
  history.style.display = "block";
}

function prependSign(){
    let currentText = currInput.value;
    if(currentText[0] != "-"){
        currentText = "-" + currentText;
        
    } else{
        currentText = currentText.substring(1);
    }
    currInput.value = currentText;
}

function getOperationSign(operation) {
  if (operation === "divide") return "÷";
  else if (operation === "multiply") return "x";
  else if (operation === "subtract") return "-";
  else if (operation === "addition") return "+";
  else if (operation === "modulus") return "%";
  else return "";
}

function historyText(){
    if(operation === "sqRoot"){
        return `√${firstNumber} = ${result}`
      }
      else if(operation === "factorial"){
return `!${firstNumber} = ${result}`
      }
      else if(operation === "power"){    
        return `${firstNumber}<sup>${secondNumber}</sup> = ${result}`
      }
      else{
        return `${firstNumber} ${getOperationSign(operation)} 
        ${secondNumber} = ${result}`
      }
}

function getPi() {
  return Math.PI.toFixed(10);
}

function clearEverything() {
  isNewCalculation = true;
  firstNumber = 0;
  secondNumber = 0;
  result = 0;
  operation = "";
  currInput.value = "0";
}
