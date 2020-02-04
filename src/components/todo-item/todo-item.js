import React from 'react';
import './todo-item.css';

const TodoItem = ({ label, important = false}) => {
  const itemStyle = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };

  return (
    <div className="todo-app__item">
      <span
        className="todo-app__label"
        style={itemStyle}>
      {label}
      </span>
      <div className="todo-app__btns">
        <button
            type="button"
            className="btn btn-outline-success btn-sm">
            <i className="fa fa-exclamation"></i>
          </button>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm">
            <i className="fa fa fa-trash-o"></i>
          </button>
      </div>
    </div>

  );
};

export default TodoItem;