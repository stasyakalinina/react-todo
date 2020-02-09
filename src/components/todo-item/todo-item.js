import React from 'react';
import './todo-item.css';

const TodoItem = ({ label, onDeleted, onToggleImportant, onToggleDone, done, important }) => {
  let classNames = 'todo-app__item';
  if (done) {
    classNames += ' is-done';
  }
  if (important) {
    classNames += ' is-important';
  }

  return (
    <div className={classNames}>
      <span
        className="todo-app__label"
        onClick={ onToggleDone }>
      {label}
      </span>
      <div className="todo-app__btns">
        <button
            type="button"
            className="btn btn-outline-success btn-sm"
            onClick={ onToggleImportant }>
            <i className="fa fa-exclamation"></i>
          </button>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick ={ onDeleted }>
            <i className="fa fa fa-trash-o"></i>
          </button>
      </div>
    </div>
  );
}

export default TodoItem;