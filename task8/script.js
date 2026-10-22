let tasks = [];

let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("taskList");

function showTasks() {
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    li.textContent = tasks[i].text;

    if (tasks[i].done) {
      li.classList.add("done");
    }

    li.addEventListener("click", function () {
      tasks[i].done = !tasks[i].done;
      showTasks();
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      tasks.splice(i, 1);
      showTasks();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
  }
}

addBtn.addEventListener("click", function () {
  let text = input.value.trim();

  if (text === "") {
    alert("Please enter a task");
    return;
  }

  tasks.push({ text: text, done: false });
  input.value = "";
  showTasks();
});