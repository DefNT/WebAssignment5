let input = document.getElementById("input");
let output = document.getElementById("output");

input.addEventListener("keyup", function () {
  output.textContent = input.value;
});