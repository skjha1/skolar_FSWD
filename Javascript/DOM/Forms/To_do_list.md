### HTML

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>To-Do List</h1>
        <input type="text" id = "taskInput" placeholder="Add a new task">
        <button id="addTaskBtn">Add Task</button>
        <ul id="taskList"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>

```

### CSS

----------------

```css
body {
  font-family: Arial, sans-serif;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

ul {
  list-style-type: none;
  padding: 0;
}

.task {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 5px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.task.completed {
  background-color: #f0f0f0;
  text-decoration: line-through;
}

```


### JS
----------------


```javascript 

// Task List
let tasks = [];


// Function to render tasks 

function rendertasks () {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";


    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.add("task");
        if (task.completed){
            li.classList.add("completed")
        }
        li.innerHTML = `
        <input type = "checkbox" id = "task${index}" ${task.completed ? "checked" : ""}>
        <label for = "task${index}"> ${task.text}</label>
        <button class = "delete-btn" data-index = "${index}"> Delete </button>
        `;
        taskList.appendChild(li);


        // Add event listener for checkbox
        const checkbox = li.querySelector(`#task${index}`);
        checkbox.addEventListener("change", () => {
            tasks[index].completed = checkbox.checked;
            rendertasks();
        });

        // Add event listener for delete button
        const deleteBtn = li.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            rendertasks();
        });

    });
}

// Function to add new task 
function addTask (text){
    tasks.push({text, completed: false});
    rendertasks();
}

// Event listener for add task button

const addTaskBtn = document.getElementById("addTaskBtn");
addTaskBtn.addEventListener("click", () => {
    const taskInput = document.getElementById("taskInput"); 
    const taskText = taskInput.value.trim();
    if (taskText !== ""){
        addTask(taskText);
        taskInput.value = "";
    }
});

// Initial rendering tasks

```
