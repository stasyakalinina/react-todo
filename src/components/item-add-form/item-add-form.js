import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

  state = {
    label: '',
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <form
        className="todo-app__form-add"
        onSubmit={this.onSubmitForm}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
          value={this.state.label}
        />
        <button
          type="submit"
          className="btn btn-info todo-app__btn-add"
          disabled={!this.state.label}
        >
          Add item
        </button>
      </form>
    );
  }
}
