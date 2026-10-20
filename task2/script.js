let text = document.getElementById("text");
let button = document.getElementById("changeBtn");

button.addEventListener("click", function () {
  text.textContent = "This is changed text";
});