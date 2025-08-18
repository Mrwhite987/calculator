let num1 = "";
let operator = "";
let num2 = "";
let num1WithOperator = "";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    alert("Can't divide by 0!");
    reset();
    display.textContent = "";
  } else {
    return a / b;
  }
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(Number(num1), Number(num2));
      break;
    case "-":
      return subtract(Number(num1), Number(num2));
      break;
    case "*":
      return multiply(Number(num1), Number(num2));
      break;
    case "/":
      return divide(Number(num1), Number(num2));
      break;
  }
}

const digitButtons = document.querySelector("div.digits");

digitButtons.addEventListener("click", function (e) {
  let content = e.target.textContent;
  addContentToDisplay(content);
});

const display = document.querySelector("div.display");

function addContentToDisplay(content) {
  display.textContent += content;
}

const equalButton = document.querySelector("div.equal");
const operatorButtons = document.querySelectorAll("div.operator");

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", function () {
    if (/[+*/]|(?<!^)-/.test(display.textContent) && num1) {
      evaluate();
      operator = operatorButton.textContent;
      num1 = display.textContent;
      addContentToDisplay(operator);
      num1WithOperator = display.textContent;
    } else {
      operator = operatorButton.textContent;
      num1 = display.textContent;
      addContentToDisplay(operator);
      num1WithOperator = display.textContent;
      // console.log(`num1WithOperator=${num1WithOperator}`);
    }
  });
});

equalButton.addEventListener("click", evaluate);

function evaluate() {
  const currentDisplay = display.textContent;
  // console.log(num1WithOperator);
  const num2 = currentDisplay.replace(num1WithOperator, "");

  if (num1 && num2 && operator) {
    const result = formatNumber(operate(operator, num1, num2)).toString();
    display.textContent = result;
    reset();
  } else {
    alert("Operator or number missing");
    reset();
    display.textContent = "";
  }
}

function formatNumber(num) {
  if (Number.isInteger(num)) {
    return num; // leave as is
  }
  return parseFloat(num.toFixed(3)); // round to 3 decimal places
}

const clearButton = document.querySelector("div.clear");

clearButton.addEventListener("click", function () {
  const confirmClear = prompt(
    "Y for clearing everything and starting fresh!",
    "Y"
  );
  if (confirmClear.toLocaleLowerCase() == "y") {
    reset();
    display.textContent = "";
  }
});

function reset() {
  operator = "";
  num1 = "";
  num2 = "";
}

const deleteButton = document.querySelector("div.backspace");
deleteButton.addEventListener("click", deleteLastOfDisplay);

function deleteLastOfDisplay() {
  const currentDisplay = display.textContent;
  const lastChar = currentDisplay.slice(-1);
  const remainChars = currentDisplay.slice(0, -1);
  display.textContent = remainChars;
}
