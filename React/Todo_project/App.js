import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm'; // Import TodoForm component
import TodoList from './components/TodoList'; // Import TodoList component

const App = () => {
  const [todos, setTodos] = useState([]); // State to hold the list of to-do items

  // Function to add a new to-do item
  const addTodo = (text) => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };
  
  // Function to toggle the completion status of a to-do item
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // Function to remove a to-do item
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} /> {/* Render TodoForm and pass addTodo function as a prop */}
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
};

export default App; // Export App as default
