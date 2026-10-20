let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");

function calculate(operator) {
  if (num1.value === "" || num2.value === "") {
    result.textContent = "Please enter both numbers";
    return;
  }

  let a = Number(num1.value);
  let b = Number(num2.value);

  if (operator === "+") {
    result.textContent = a + b;
  } else if (operator === "-") {
    result.textContent = a - b;
  } else if (operator === "*") {
    result.textContent = a * b;
  } else if (operator === "/") {
    if (b === 0) {
      result.textContent = "Cannot divide by zero";
    } else {
      result.textContent = a / b;
    }
  }
}

document.getElementById("add").addEventListener("click", function () { calculate("+"); });
document.getElementById("sub").addEventListener("click", function () { calculate("-"); });
document.getElementById("mul").addEventListener("click", function () { calculate("*"); });
document.getElementById("div").addEventListener("click", function () { calculate("/"); });