
import React from 'react';

const TodoItem = ({ task, deleteTask }) => {
  return (
    <div className="todo-item">
      <p>{task}</p>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default TodoItem;
