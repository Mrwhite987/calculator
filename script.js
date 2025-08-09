let num1, operator, num2;

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
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
  }
}

const digitButtons = document.querySelector("div.digits");

digitButtons.addEventListener("click", function (e) {
  let content = e.target.textContent;
  console.log(content);
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
    if (/[+*/]|(?<!^)-/.test(display.textContent)) {
      evaluate();
      operator = operatorButton.textContent;
      num1 = Number(display.textContent);
      addContentToDisplay(operator);
      num1WithOperator = display.textContent;
    } else {
      operator = operatorButton.textContent;
      num1 = Number(display.textContent);
      addContentToDisplay(operator);
      num1WithOperator = display.textContent;
    }
  });
});

equalButton.addEventListener("click", evaluate);

function evaluate() {
  const currentDisplay = display.textContent;
  num2 = Number(currentDisplay.replace(num1WithOperator, ""));
  const result = formatNumber(operate(operator, num1, num2)).toString();
  display.textContent = result;
  reset();
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
    "Are you sure of clearing everything and start fresh? Y for yes!",
    "Y"
  );
  if (confirmClear.toLocaleLowerCase() == "y") {
    reset();
    display.textContent = "";
  }
});

function reset() {
  operator = undefined;
  num1 = undefined;
  num2 = undefined;
}
