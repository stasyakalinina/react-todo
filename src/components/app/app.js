import React, { Component } from 'react';
import './app.css';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';

export default class App extends Component {

  maxId = 100;

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

  addItem = (text) => {
    let newItem = {
      label: text,
      important: false,
      id: this.maxId++,
    };

    this.setState(({todoData}) => {
      let newArr = [
        ...todoData,
        newItem];

      return {
        todoData: newArr,
      }
    });
  };

  render() {
    return (
      <div className="container todo-app">
        <AppHeader more={5} done={2} />
        <main>
          <div className="todo-app__top">
            <SearchPanel />
            <ItemStatusFilter />
          </div>
          <TodoList
            todos={this.state.todoData}
            onDeleted={this.deleteItem} />
          <div className="todo-app__bottom">
            <ItemAddForm
              onItemAdded={this.addItem}/>
          </div>
        </main>
      </div>
    );
  }
}