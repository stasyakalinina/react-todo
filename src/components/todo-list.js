import React from 'react';
import TodoItem from './todo-item';

const TodoList = ({ todos }) => {

  const elements = todos.map((element) => {
    return (
      <li>
        <TodoItem
          label={element.label}
          important={element.important} />
      </li>
    );
  });

  return (
    <ul>
      { elements }
    </ul>
  );
};

export default TodoList;