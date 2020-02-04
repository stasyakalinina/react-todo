import React from 'react';
import TodoItem from '../todo-item/todo-item';
import './todo-list.css';

const TodoList = ({ todos }) => {

  const elements = todos.map((element) => {
    const { id, ...itemProps} = element;

    return (
      <li key={id} className="list-group-item">
        <TodoItem {...itemProps} />
      </li>
    );
  });

  return (
    <ul className="list-group todo-app__list">
      { elements }
    </ul>
  );
};

export default TodoList;