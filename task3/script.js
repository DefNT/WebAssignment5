let box = document.getElementById("box");
let colorBtn = document.getElementById("colorBtn");
let sizeBtn = document.getElementById("sizeBtn");

colorBtn.addEventListener("click", function () {
  box.style.backgroundColor = "lightgreen";
});

sizeBtn.addEventListener("click", function () {
  box.style.fontSize = "28px";
});