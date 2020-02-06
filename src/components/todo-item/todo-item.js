import React, { Component } from 'react';
import './todo-item.css';

export default class TodoItem extends Component {
  state = {
    done: false,
    important: false,
  };

  onLabelClick = () => {
    this.setState((state) => {
      return {
        done: !state.done,
      }
    });
  };

  onMarkImportant = () => {
    this.setState((state) => {
      return {
        important: !state.important,
      }
    });
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

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
          onClick={ this.onLabelClick }>
        {label}
        </span>
        <div className="todo-app__btns">
          <button
              type="button"
              className="btn btn-outline-success btn-sm"
              onClick={ this.onMarkImportant }>
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
}