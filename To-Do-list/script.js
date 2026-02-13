// Select elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task on button click
addBtn.addEventListener("click", addTask);

// Add task on Enter key
taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

// Main function
function addTask() {

    const text = taskInput.value.trim();

    // Prevent empty task
    if (text === "") {
        alert("Please enter a task");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.className = "task-item";

    // Task text
    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = text;

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.textContent = "Delete";

    // ✅ Mark complete
    span.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Delete task
    delBtn.addEventListener("click", () => {
        li.remove();
    });

    // Add to list
    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}
