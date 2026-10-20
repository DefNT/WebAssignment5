let tasks = [];

let titleInput = document.getElementById("title");
let descInput = document.getElementById("description");
let addButton = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

function render() {
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let card = document.createElement("div");
        card.classList.add("task");
    if (tasks[i].done) {
        card.classList.add("completed");
    }

    let header = document.createElement("div");
    header.classList.add("task-header");

    let title = document.createElement("span");
    title.classList.add("task-title");
    title.textContent = tasks[i].title;

    let buttons = document.createElement("div");

    let doneBtn = document.createElement("button");
    doneBtn.classList.add("done-btn");
    doneBtn.textContent = "✓";
    doneBtn.addEventListener("click", function () {
        tasks[i].done = !tasks[i].done;
        render();
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "✕";
    deleteBtn.addEventListener("click", function () {
        tasks.splice(i, 1);
        render();
    });

    buttons.appendChild(doneBtn);
    buttons.appendChild(deleteBtn);
    header.appendChild(title);
    header.appendChild(buttons);

    let desc = document.createElement("p");
    desc.textContent = tasks[i].description;

    card.appendChild(header);
    card.appendChild(desc);
    taskList.appendChild(card);
  }
}

addButton.addEventListener("click", function () {
    let title = titleInput.value.trim();
    let description = descInput.value.trim();

    if (title === "" || description === "") {
        alert("Please fill in both title and description.");
        return;
    }

    tasks.push({ 
        title: title, 
        description: description, 
        done: false 
    });

    titleInput.value = "";
    descInput.value = "";
    render();
});