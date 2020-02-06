import React from 'react';
import TodoItem from '../todo-item/todo-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted }) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps} = item;

    return (
      <li key={id} className="list-group-item">
        <TodoItem
          {...itemProps }
          onDeleted={() => onDeleted(id)} />
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