const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Save tasks
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render UI
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const leftDiv = document.createElement("div");
    leftDiv.classList.add("task-left");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    const span = document.createElement("span");
    span.textContent = task.text;
    span.classList.add("task-text");

    if (task.completed) {
      span.classList.add("completed");
    }

    // Checkbox event
    checkbox.addEventListener("change", () => {
      tasks[index].completed = checkbox.checked;
      saveTasks();
      renderTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // Delete event
    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(span);
    li.appendChild(leftDiv);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// Add task
addBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text !== "") document.addEventListener("DOMContentLoaded", function () {

  const addBtn = document.getElementById("addBtn");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
      const li = document.createElement("li");

      const leftDiv = document.createElement("div");
      leftDiv.classList.add("task-left");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;

      const span = document.createElement("span");
      span.textContent = task.text;
      span.classList.add("task-text");

      if (task.completed) {
        span.classList.add("completed");
      }

      checkbox.addEventListener("change", function () {
        tasks[index].completed = this.checked;
        saveTasks();
        renderTasks();
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");

      deleteBtn.addEventListener("click", function () {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
      });

      leftDiv.appendChild(checkbox);
      leftDiv.appendChild(span);
      li.appendChild(leftDiv);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
  }

  addBtn.addEventListener("click", function () {
    const text = taskInput.value.trim();
    if (text !== "") {
      tasks.push({ text: text, completed: false });
      saveTasks();
      renderTasks();
      taskInput.value = "";
    }
  });

  taskInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      addBtn.click();
    }
  });

  renderTasks();
});{
    tasks.push({ text: text, completed: false });
    saveTasks();
    renderTasks();
    taskInput.value = "";
  }
});

// Press Enter
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

// Initial load
renderTasks();