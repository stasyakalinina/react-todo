import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'},
  ];

  render() {
    const {onFilter, onFilterChange} = this.props;
    const btns = this.buttons.map(({name, label}) => {
      let classNames = 'btn';
      if(onFilter === name) {
        classNames += ' is-active';
      }

      return (
        <button
          type="button"
          className={classNames}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      )
    });

    return (
      <div className="btn-group todo-app__filters">
        {btns}
      </div>
    );
  }
}