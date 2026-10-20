let list = document.getElementById("list");
let addBtn = document.getElementById("addBtn");
let removeBtn = document.getElementById("removeBtn");
let count = 0;

addBtn.addEventListener("click", function () {
  count++;
  let li = document.createElement("li");
  li.textContent = "Item " + count;
  list.appendChild(li);
});

removeBtn.addEventListener("click", function () {
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
    count--;
  }
});