// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Todo from './Todo';

const TodoList = ({ handleToggleComplete, todos }) => {
  const listItem = todos.length ? (
    <div>
      <h1 className="center red-text darken-4">Todo's</h1>
      {todos.map(todo => (
        <Todo
          handleToggleComplete={handleToggleComplete}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  ) : (
    <p className="center">You have no todo's at this time, nice!!</p>
  );
  return <div>{listItem}</div>;
};

export default TodoList;
