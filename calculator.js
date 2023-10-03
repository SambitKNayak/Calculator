let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}

function calculateResult() {
  try {
    displayValue = eval(displayValue);
    document.getElementById("display").value = displayValue;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function calculateSquareRoot() {
  displayValue = Math.sqrt(parseFloat(displayValue));
  document.getElementById("display").value = displayValue;
}

function calculateSquare() {
  displayValue = Math.pow(parseFloat(displayValue), 2);
  document.getElementById("display").value = displayValue;
}

function calculateFactorial() {
  let num = parseFloat(displayValue);
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  displayValue = result;
  document.getElementById("display").value = displayValue;
}

function calculateSin() {
  displayValue = Math.sin(parseFloat(displayValue));
  document.getElementById("display").value = displayValue;
}

function calculateCos() {
  displayValue = Math.cos(parseFloat(displayValue));
  document.getElementById("display").value = displayValue;
}

function calculateTan() {
  displayValue = Math.tan(parseFloat(displayValue));
  document.getElementById("display").value = displayValue;
}
