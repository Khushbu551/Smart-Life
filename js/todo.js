export function setupTodoList() {
  const todoInput = document.getElementById("todoInput");
  const addTaskBtn = document.getElementById("addTask");
  const todoList = document.getElementById("todoList");

  // Function to add task
  function addTask() {
    if (todoInput.value.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = todoInput.value;

    // Delete Button for each task
    const deletBtn = document.createElement("button");
    deletBtn.textContent = "❌";
    deletBtn.onclick = function () {
      todoList.removeChild(li);
      saveTasks();
    };

    li.appendChild(deletBtn);
    todoList.appendChild(li);

    saveTasks();
    todoInput.value = "";
  }

  // Function to save tasks in localStorage
  function saveTasks() {
    const tasks = Array.from(todoList.children).map(
      (li) => li.firstChild.textContent
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Function to load tasks from localstorage
  function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = task;

      const deletBtn = document.createElement("button");
      deletBtn.textContent = "❌";
      deletBtn.onclick = function () {
        todoList.removeChild(li);
        saveTasks();
      };

      li.appendChild(deletBtn);
      todoList.appendChild(li);
    });
  }

  // Event Listeners
  addTaskBtn.addEventListener("click", addTask);
  todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
  });

  // LOad tasks on page load
  window.addEventListener("load", loadTasks);
}
