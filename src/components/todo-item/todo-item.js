import React, { Component } from 'react';
import './todo-item.css';

export default class TodoItem extends Component {
  state = {
    done: false,
  };

  onLabelClick = () => {
    this.setState({
      done: true
    });
  }

  render() {
    const { label, important = false } = this.props;
    const { done } = this.state;

    let classNames = 'todo-app__item';
    if (done) {
      classNames += ' is-done';
    }

    const itemStyle = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };

    return (
      <div className={classNames}>
        <span
          className="todo-app__label"
          style={itemStyle}
          onClick={ this.onLabelClick }>
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
  }
}