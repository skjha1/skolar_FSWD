import React from 'react';

const TodoItem = ({ todo, index, toggleTodo, removeTodo }) => {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
      <div>
        <button onClick={() => toggleTodo(index)}>Toggle</button>
        <button onClick={() => removeTodo(index)}>Remove</button>
      </div>
    </li>
  );
};

export default TodoItem;
