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
li {
  margin-bottom: 5px;
}

```


### JS
----------------


```javascript 

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();


    if (taskText  !== "") {
        const taskList = document.getElementById("taskList"); // Retriving element 
        const li = document.createElement("li"); // creating a new node 
        li.textContent = taskText; // manipulating node 
        taskList.appendChild(li); // appending the node 
        taskInput.value = "";
    }

}

// Event listener for add task button 
const addTaskBtn = document.getElementById("addTaskBtn");
addTaskBtn.addEventListener("click", addTask);

```
