import React from 'react';
import './Todo.css';
const TodoForm = ({
  handleTodoChange,
  value,
  handleAddTodo,
  handleClearTodos
}) => {
  return (
    <form>
      <input
        onChange={handleTodoChange}
        type="text"
        name="todo"
        value={value}
        placeholder="add your todo here..."
      />

      <button
        className="waves-effect waves-light btn  red darken-4"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
      <button
        className="waves-effect waves-light btn  red darken-4"
        onClick={handleClearTodos}
      >
        Clear Completed
      </button>
    </form>
  );
};

export default TodoForm;
