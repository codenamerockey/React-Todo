import React from 'react';

const Todo = ({ todo, handleToggleComplete }) => {
  return (
    <div
      className=" center collection"
      style={todo.completed ? { textDecoration: 'line-through' } : null}
      onDoubleClick={() => handleToggleComplete(todo.id)}
    >
      {todo.task}
    </div>
  );
};

export default Todo;
