import React from 'react';
import TodoItem from './TodoItem.js'; // Import TodoItem component

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem 
          key={index}
          todo={todo}
          index={index}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
