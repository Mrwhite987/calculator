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
    case "/":
      return divide(num1, num2);
  }
}

let digitButtons = document.querySelector("div.digits");

digitButtons.addEventListener("click", function (e) {
  let content = e.target.textContent;
  console.log(content);
  addContentToDisplay(content);
});

function addContentToDisplay(content) {
  const display = document.querySelector("div.display");
  display.textContent += content;
}
