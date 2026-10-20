let box = document.getElementById("box");

box.addEventListener("mouseover", function () {
  box.style.backgroundColor = "green";
});

box.addEventListener("mouseout", function () {
  box.style.backgroundColor = "lightgray";
});