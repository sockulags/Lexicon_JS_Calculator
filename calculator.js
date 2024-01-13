let isNewCalculation = true;
let firstNumber = 0;
let secoundNumber = 0;
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
      currInput.value += text;
    }
  }
  secoundNumber = parseFloat(currInput.value);
}

function addOperation(operator) {
  firstNumber = parseFloat(currInput.value);
  operation = operator.className;
  currInput.value = "";
}

function calculateResult() {
  if (operation.length > 0) {
    switch (operation) {
      case "divide":
        result = firstNumber / secoundNumber;
        break;
      case "multiply":
        result = firstNumber * secoundNumber;
        break;
      case "subtract":
        result = firstNumber - secoundNumber;
        break;
      case "addition":
        result = firstNumber + secoundNumber;
        break;
    }

    addToHistory();

    firstNumber = 0;
    secoundNumber = 0;
    operation = "";
    isNewCalculation = true;
    currInput.value = result.toString();
  }
}

function addToHistory() {
  const newCalulcation = document.createElement("p");
  newCalulcation.textContent = `${firstNumber} ${getOperationSign(
    operation
  )} ${secoundNumber} = ${result}`;
  const target = document.querySelector(".previousCalulations");
  target.appendChild(newCalulcation);
  const history = document.getElementById("history");
  history.style.display = "block";
}

function getOperationSign(operation) {
  if (operation === "divide") return "÷";
  else if (operation === "multiply") return "x";
  else if (operation === "subtract") return "-";
  else if (operation === "addition") return "+";
  else return "";
}
