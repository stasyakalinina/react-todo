import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

  render() {
    const { onItemAdded } = this.props;
    return (
      <form
        className="todo-app__form-add">
        <input
          type="text"
          className="form-control"
        />
        <button
          type="button"
          className="btn btn-info todo-app__btn-add"
          onClick={() => onItemAdded('See movie') }>
          Add item
        </button>
      </form>
    );
  }
}
