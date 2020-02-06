import React, { Component } from 'react';
import './app.css';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';

export default class App extends Component {
  state = {
    todoData: [
      { label: 'Drink coffee', important: false, id: 1},
      { label: 'Make awesome app', important: true, id: 2},
      { label: 'Have a lunch', important: false, id: 3  },
    ],
  };

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      let index = todoData.findIndex((el) => el.id === id);

      let newArray = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)
      ];

      return {
        todoData: newArray,
      }
    });
  };

  render() {
    return (
      <div className="container todo-app">
        <AppHeader more={5} done={2} />
        <main>
          <div className="todo-app__panel">
            <SearchPanel />
            <ItemStatusFilter />
          </div>
          <TodoList
            todos={this.state.todoData}
            onDeleted={this.deleteItem} />
        </main>
      </div>
    );
  }
}